import { useSearchParams } from "react-router-dom";

const Filter = ({ options, filterField }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  const handleStatus = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex gap-x-4 bg-secondary-0 rounded-md border border-secondary-100 ">
        {options.map((option) => {
          const isActive = option.value === currentFilter;
          return (
            <button
              className={`whitespace-nowrap py-2 px-4 rounded-md font-bold transition-all duration-300 ${
                isActive
                  ? "bg-primary-900 text-white"
                  : "bg-secondary-0 text-secondary-700"
              }`}
              onClick={() => handleStatus(option.value)}
              key={option.value}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
