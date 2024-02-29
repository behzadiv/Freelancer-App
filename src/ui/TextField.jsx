const TextField = ({
  label,
  name,
  register,
  type = "text",
  validationSchema,
  errors,
  required,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-secondary-700 text-right"
      >
        {label}
        {required && <span className="text-error mr-1">*</span>}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        {...register(name, validationSchema)}
        className="textField_input"
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block mt-3">{errors[name].message}</span>
      )}
    </div>
  );
};

export default TextField;
