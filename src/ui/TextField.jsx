const TextField = ({ label, name, value, onChange }) => {

  return (
    <div>
      <label htmlFor={name} className="mb-2 block">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="textField_input"
        autoComplete="off"
      />
    </div>
  );
};

export default TextField;
