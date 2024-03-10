import Filter from "../../../ui/Filter";
import FilterDropdown from "../../../ui/FilterDropdown";
import useCategories from "../../projects/useCategories";

const ProjectsHeader = () => {
  const { transformedCategories } = useCategories();

  const statusOptions = [
    { label: "همه", value: "ALL" },
    { label: "باز", value: "OPEN" },
    { label: "بسته", value: "CLOSED" },
  ];

  return (
    <div className="flex justify-between mb-8 text-secondary-700">
      <h1 className="text-lg font-bold">کل پروژه ها</h1>
      <div className="flex gap-x-2">
        <Filter options={statusOptions} filterField={"status"} />
        <FilterDropdown
          options={[
            { value: "latest", label: "جدید ترین" },
            { value: "earliest", label: "قدیمی ترین" },
          ]}
          filterField={"sort"}
        />
        <FilterDropdown
          options={[
            { value: "All", label: "دسته بندی(همه)" },
            ...transformedCategories,
          ]}
          filterField={"category"}
        />
      </div>
    </div>
  );
};

export default ProjectsHeader;
