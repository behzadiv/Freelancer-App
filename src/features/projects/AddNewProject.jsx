import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";

const AddNewProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addNewProject = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(addNewProject)}>
      <TextField
        label={"عنوان"}
        name="title"
        register={register}
        validationSchema={{ required: "عنوان پروژه را وارد کنید" }}
        errors={errors}
      />
      <TextField
        label={"توضیحات"}
        name="description"
        register={register}
        validationSchema={{ required: "توضیحات پروژه را وارد کنید" }}
        errors={errors}
      />
      <TextField
        label={"بودجه"}
        name="budget"
        type="number"
        register={register}
        validationSchema={{ required: "بودجه پروژه را وارد کنید" }}
        errors={errors}
      />
      <button className="btn btn-primary w-full">تایید</button>
    </form>
  );
};

export default AddNewProject;
