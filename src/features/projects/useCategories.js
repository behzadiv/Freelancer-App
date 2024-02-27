import { useQuery } from "@tanstack/react-query";
import { getAllCategoriesApi } from "../../services/categoryServic";

export default function useCategories() {
  const { data, isPending } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getAllCategoriesApi,
  });
  const { categories } = data || [];
  return { categories, isPending };
}
