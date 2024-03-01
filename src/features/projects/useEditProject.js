import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../services/projectsService";
import toast from "react-hot-toast";

export default function useEditProject() {
  const queryClient = useQueryClient();
  const { isPending: isEditing, mutateAsync: editProject } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries("get-projects");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { isEditing, editProject };
}
