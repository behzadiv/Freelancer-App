import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProjectApi } from "../../services/projectsService";
import toast from "react-hot-toast";

export default function useAddNewProject() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutateAsync: createProject } = useMutation({
    mutationFn: addNewProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries("get-projects");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isCreating, createProject };
}
