import { useState } from "react";

const SendOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  
  return (
    <div className="w-full sm:max-w-screen-sm mx-auto space-y-4">
      <div>
        <label htmlFor="phoneNumber" className="mb-1">
          شماره موبایل
        </label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="textField_input"
        />
      </div>
      <button className="btn btn-primary w-full">
        ارسال کد تایید
      </button>
    </div>
  );
};

export default SendOTPForm;
