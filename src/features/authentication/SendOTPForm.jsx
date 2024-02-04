import { useState } from "react";
import TextField from "../../ui/TextField";

const SendOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="space-y-5">
      <TextField
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button className="btn btn-primary w-full">ارسال کد تایید</button>
    </div>
  );
};

export default SendOTPForm;
