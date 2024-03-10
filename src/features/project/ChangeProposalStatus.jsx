import { useForm } from "react-hook-form";
import RHFselect from "../../ui/RHFselect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import Loading from "../../ui/Loading";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const options = [
  { value: 0, label: "رد شده" },
  { value: 1, label: "در انتظار تایید" },
  { value: 2, label: "تایید شده" },
];

const ChangeProposalStatus = ({ proposalId, onClose }) => {
  const { register, handleSubmit } = useForm();
  const { changeStatus, isUpdating } = useChangeProposalStatus();
  const queryClient = useQueryClient();
  const { id: projectId } = useParams();

  const onSubmit = (data) => {
    console.log(data);
    changeStatus(
      { proposalId, projectId, ...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["get-project", projectId],
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

export default ChangeProposalStatus;
