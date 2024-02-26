const TextField = ({
  label,
  name,
  register,
  type = "text",
  validationSchema,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        {...register(name, validationSchema)}
        className="textField_input"
        autoComplete="off"
        validationSchema={validationSchema}
      />
      {errors && errors[name] && (
        <span className="text-error block mt-3">{errors[name].message}</span>
      )}
    </div>
  );
};

export default TextField;
