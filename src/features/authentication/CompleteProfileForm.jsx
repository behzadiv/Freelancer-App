import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  return (
    <form className="w-full space-y-8 sm:max-w-sm">
      <TextField
        label="نام و نام خانوادگی"
        name="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <TextField
        label="ایمیل"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <div className="flex justify-center gap-x-8">
        <RadioInput
          label={"کارفرما"}
          name={"role"}
          value={"OWNER"}
          onChange={(e) => setRole(e.target.value)}
          checked={role === "OWNER"}
        />
        <RadioInput
          label={"فریلنسر"}
          name={"role"}
          value={"FREELANCER"}
          onChange={(e) => setRole(e.target.value)}
          checked={role === "FREELANCER"}
        />
      </div>
      <button className="btn btn-primary w-full">تایید</button>
    </form>
  );
};

export default CompleteProfileForm;
