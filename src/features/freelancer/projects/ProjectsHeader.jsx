import FilterDropdown from "../../../ui/FilterDropdown";
import useCategories from "../../projects/useCategories";

const ProjectsHeader = () => {
  const { transformedCategories } = useCategories();
  // console.log(categories);

  return (
    <div className="flex justify-between mb-8">
      <h1 className="text-lg font-bold">کل پروژه ها</h1>
      <div>
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
