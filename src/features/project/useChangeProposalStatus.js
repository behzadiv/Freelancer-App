import { useMutation } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useProposalStatus() {
  const { isPending: isUpdating, mutateAsync: changeStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { changeStatus, isUpdating };
}
