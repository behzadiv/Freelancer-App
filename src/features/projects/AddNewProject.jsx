import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFselect from "../../ui/RHFselect";
import { TagsInput } from "react-tag-input-component";

const AddNewProject = () => {
  const [tags, setTags] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addNewProject = (data) => {
    console.log(data);
  };

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
        options={[]}
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
      <button className="btn btn-primary w-full">تایید</button>
    </form>
  );
};

export default AddNewProject;
