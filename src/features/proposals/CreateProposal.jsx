import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import useAddProposal from "./useAddProposal";
import Loading from "../../ui/Loading";

const CreateProposal = ({ projectId, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createProposal, isCreating } = useAddProposal();

  const addProposal = (data) => {
    const newProposal = { ...data, projectId };
    createProposal(newProposal, { onSuccess: onClose() });
  };

  return (
    <form onSubmit={handleSubmit(addProposal)} className="space-y-4">
      <TextField
        label="توضیحات"
        name="description"
        type="text"
        register={register}
        validationSchema={{
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
          required: "توضیحات پروژه را وارد کنید",
        }}
        errors={errors}
        required
      />
      <TextField
        label="مدت زمان انجام (روز)"
        name="duration"
        type="number"
        register={register}
        validationSchema={{ required: "مدت زمان انجام پروژه را وارد کنید" }}
        errors={errors}
        required
      />
      <TextField
        label="قیمت"
        name="price"
        type="number"
        register={register}
        validationSchema={{ required: "قیمت پروژه را وارد کنید" }}
        errors={errors}
        required
      />
      {isCreating ? (
        <Loading />
      ) : (
        <button className="btn btn-primary w-full">تایید</button>
      )}
    </form>
  );
};

export default CreateProposal;
