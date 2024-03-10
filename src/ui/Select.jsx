const Select = ({ value, onChange, options }) => {
  return (
    <select
      value={value}
      className="textField_input bg-secondary-0 py-2 text-xs"
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
