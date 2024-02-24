import { useMutation } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectsService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const { isPending: isDeleting, mutate: removeProject } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { removeProject, isDeleting };
}
