const RadioInput = ({ name, value, label, onChange ,checked}) => {
  return (
    <div className="flex justify-center gap-x-2 items-center">
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={onChange}
        checked={checked}
        className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-500"
      />
      <label className="cursor-pointer" htmlFor={value}>
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
