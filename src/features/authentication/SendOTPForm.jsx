import { useState } from "react";

const SendOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log("phon", phoneNumber);
  return (
    <div className="w-full sm:max-w-screen-sm mx-auto space-y-4">
      <div>
        <label htmlFor="phoneNumber" className="mb-1">
          شماره موبایل
        </label>
        <input
          type="number"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full py-2 px-4 text-primary-800 border border-gray-300 rounded-xl hover:border-primary-300 focus:border-primary-300 focus:shadow-md focus:shadow-primary-200 transition-all duration-300 ease-out"
        />
      </div>
      <button className="w-full bg-primary-900 font-bold text-white py-2 rounded-xl hover:bg-primary-800 transition-all duration-300 shadow-lg  shadow-primary-300">
        ارسال کد تایید
      </button>
    </div>
  );
};

export default SendOTPForm;
