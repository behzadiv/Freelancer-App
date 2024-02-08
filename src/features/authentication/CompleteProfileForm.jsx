import { useState } from "react";
import TextField from "../../ui/TextField";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
        <div className="flex justify-center gap-x-1 items-center">
          <input type="radio" name="role" id="OWNER" value="OWNER" className="cursor-pointer w-4 h-4 form-radio" />
          <label className="cursor-pointer" htmlFor="OWNER">کارفرما</label>
        </div>
        <div className="flex justify-center gap-x-1 items-center">
          <input type="radio" name="role" id="FREELANCER" value="FREELANCER" className="cursor-pointer w-4 h-4 form-radio" />
          <label className="cursor-pointer" htmlFor="FREELANCER">فریلنسر</label>
        </div>
      </div>
      <button className="btn btn-primary w-full">تایید</button>
    </form>
  );
};

export default CompleteProfileForm;
