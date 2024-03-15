import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import useChangeUserStatus from "./useChangeUserStatus";
import Loading from "../../../ui/Loading";
import RHFselect from "../../../ui/RHFselect";

const options = [
  { value: 0, label: "رد شده" },
  { value: 1, label: "در انتظار تایید" },
  { value: 2, label: "تایید شده" },
];

const ChangeUserStatus = ({ userId, onClose }) => {
  const { register, handleSubmit } = useForm();
  const { changeStatus, isUpdating } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["get-users"],
          });
        },
      }
    );
  };
  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <RHFselect
          name="status"
          register={register}
          label="تغییر وضعیت"
          options={options}
        />
        {isUpdating ? (
          <Loading />
        ) : (
          <button className="btn btn-primary w-full" type="submit">
            تایید
          </button>
        )}
      </form>
    </div>
  );
};

export default ChangeUserStatus;
