import { useQuery } from "@tanstack/react-query";
import { getProposalListApi } from "../../services/proposalService";

export default function useProposalList() {
  const { isLoading, data } = useQuery({
    queryKey: ["get-proposal"],
    queryFn: getProposalListApi,
  });
  const { proposals } = data || [];

  return { proposals, isLoading };
}
