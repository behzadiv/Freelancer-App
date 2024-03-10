import { useQuery } from "@tanstack/react-query";
import { getAllCategoriesApi } from "../../services/categoryServic";

export default function useCategories() {
  const { data, isPending } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getAllCategoriesApi,
  });

  const { categories: rowCategories = [] } = data || [];
  
  const categories = rowCategories.map((item) => {
    return { value: item._id, label: item.title }; //send value & label to RHFselect
  });
  const transformedCategories = rowCategories.map((item) => {
    return { value: item.englishTitle, label: item.title };
  });

  return { categories, isPending, transformedCategories };
}
