import { useSearchParams } from "react-router-dom";
import Select from "./Select";

const FilterDropdown = ({ options, filterField }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return <Select options={options} value={value} onChange={handleChange} />;
};

export default FilterDropdown;
