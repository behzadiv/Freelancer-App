import { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import useAddNewProject from "./useAddNewProject";
import useCategories from "./useCategories";
import TextField from "../../ui/TextField";
import RHFselect from "../../ui/RHFselect";
import DatepickerField from "../../ui/DatepickerField";
import Loading from "../../ui/Loading";

const AddNewProject = ({ onClose }) => {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { categories, isPending } = useCategories();
  const { isCreating, createProject } = useAddNewProject();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addNewProject = (data) => {
    const newProject = { ...data, tags, deadline: date };
    createProject(newProject, {
      onSuccess: () => {
        onClose();
      },
    });
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
        <label
          htmlFor="tags"
          className="mb-2 block text-secondary-700 text-right"
        >
          تگ
        </label>
        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          placeHolder="تگ مورد نظر خود را وارد کنید"
        />
      </div>
      <DatepickerField date={date} setDate={setDate} label={"ددلاین"} />
      {isCreating ? (
        <Loading />
      ) : (
        <button className="btn btn-primary w-full">تایید</button>
      )}
    </form>
  );
};

export default AddNewProject;
