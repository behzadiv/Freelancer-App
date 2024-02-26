import RadioInput from "./RadioInput";

const RadioInputGroup = ({ watch, config, errors, register }) => {
  const { name, validationSchema = {}, options } = config;
  return (
    <div>
      <div className="flex justify-center gap-x-8">
        {options.map(({ id, label, value }) => {
          return (
            <RadioInput
              key={value}
              label={label}
              name={name}
              value={value}
              id={id}
              register={register}
              watch={watch}
              validationSchema={validationSchema}
              errors={errors}
            />
          );
        })}
      </div>
      <div className="text-center mt-2">
        {errors && errors[name] && (
          <span className="text-error ">{errors[name].message}</span>
        )}
      </div>
    </div>
  );
};

export default RadioInputGroup;
