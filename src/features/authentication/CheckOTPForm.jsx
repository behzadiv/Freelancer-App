import { useState } from "react";
import { checkOTP } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import OTPInput from "react-otp-input";
import toast from "react-hot-toast";

const CheckOTPForm = ({ phoneNumber }) => {
  const [otp, setOtp] = useState("");

  const { data, isPending, error, mutateAsync } = useMutation({
    mutationFn: checkOTP,
  });
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber, otp });
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form className="space-y-4" onSubmit={checkOtpHandler}>
      <p className="font-bold text-secondary-800"> کد تایید را وارد کنید</p>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        inputType="number"
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="flex flex-row-reverse justify-center gap-x-2"
        inputStyle={{
          width: "2.5rem",
          padding: "0.5rem 0.2rem",
          border: "1px solid rgb(var(--color-primary-400))",
          borderRadius: ".5rem",
        }}
      />
      <button className="w-full btn btn-primary" type="submit">
        تایید
      </button>
    </form>
  );
};

export default CheckOTPForm;
