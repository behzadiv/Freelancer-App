const RHFselect = ({ label, name, register, options, required }) => {
  return (
    <div>
      <label className="mb-2 text-secondary-700 block">
        {label}
        {required && <span className="text-error mr-1">*</span>}
      </label>
      <select {...register(name)} id={name} className="textField_input">
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RHFselect;
