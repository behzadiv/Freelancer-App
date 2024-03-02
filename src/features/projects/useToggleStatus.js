import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatusApi } from "../../services/projectsService";
import toast from "react-hot-toast";

export default function useToggleProject() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutateAsync: togglingStatus } = useMutation({
    mutationFn: toggleProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries("get-projects");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { isUpdating, togglingStatus };
}
