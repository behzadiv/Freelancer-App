import { useState } from "react";
import OTPInput from "react-otp-input";

const CheckOTPForm = () => {
  const [otp, setOtp] = useState("");

  return (
    <form className="space-y-4">
      <p className="font-bold text-secondary-800"> کد تایید را وارد کنید</p>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        inputType="number"
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="flex flex-row-reverse justif-center gap-x-2"
        inputStyle={{
          width: "2.5rem",
          padding: "0.5rem 0.2rem",
          border: "1px solid rgb(var(--color-primary-400))",
          borderRadius: ".5rem",
        }}
      />
      <button className="w-full btn btn-primary">تایید</button>
    </form>
  );
};

export default CheckOTPForm;
