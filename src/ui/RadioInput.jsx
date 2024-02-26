const RadioInput = ({
  name,
  id,
  value,
  label,
  register,
  checked,
  validationSchema,
}) => {
  return (
    <div className="flex justify-center gap-x-2 items-center">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
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
