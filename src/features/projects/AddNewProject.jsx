import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TagsInput } from "react-tag-input-component";
import toast from "react-hot-toast";
import useCategories from "./useCategories";
import { addNewProjectApi } from "../../services/projectsService";
import TextField from "../../ui/TextField";
import RHFselect from "../../ui/RHFselect";
import DatepickerField from "../../ui/DatepickerField";
import Loading from "../../ui/Loading";

const AddNewProject = ({ isOpenModal }) => {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { categories, isPending } = useCategories();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutateAsync } = useMutation({
    mutationFn: addNewProjectApi,
  });
  const queryClient = useQueryClient();

  const addNewProject = async (data) => {
    try {
      const { message } = await mutateAsync({ ...data, tags, deadline: date });
      toast(message);
      isOpenModal(false);
      queryClient.invalidateQueries("get-projects");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (isPending) return <Loading />;
  return (
    <form onSubmit={handleSubmit(addNewProject)} className="space-y-3">
      <TextField
        label={"عنوان"}
        name="title"
        register={register}
        validationSchema={{ required: "عنوان پروژه را وارد کنید" }}
        errors={errors}
        required
      />
      <TextField
        label={"توضیحات"}
        name="description"
        register={register}
        validationSchema={{
          required: "توضیحات پروژه را وارد کنید",
          minLength: {
            value: 15,
            message: "حداقل 15 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
        required
      />
      <TextField
        label={"بودجه"}
        name="budget"
        type="number"
        register={register}
        validationSchema={{ required: "بودجه پروژه را وارد کنید" }}
        errors={errors}
        required
      />
      <RHFselect
        label={"دسته بندی"}
        name={"category"}
        register={register}
        options={categories}
        required
      />
      <div>
        <label htmlFor="tags">تگ</label>
        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          placeHolder="تگ مورد نظر خود را وارد کنید"
        />
      </div>
      <DatepickerField date={date} setDate={setDate} label={"ددلاین"} />
      <button className="btn btn-primary w-full">تایید</button>
    </form>
  );
};

export default AddNewProject;
