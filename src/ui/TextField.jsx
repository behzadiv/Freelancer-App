const TextField = ({ label, name, register, type = "text" }) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        {...register(name)}
        className="textField_input"
        autoComplete="off"
      />
    </div>
  );
};

export default TextField;
