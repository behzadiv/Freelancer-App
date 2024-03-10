import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProposalApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useAddProposal() {
  const queryClient = useQueryClient();
  const {
    data,
    mutateAsync: createProposal,
    isPending: isCreating,
  } = useMutation({
    mutationFn: addProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries("get-proposal");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  console.log(data, "data");
  return { isCreating, createProposal };
}
