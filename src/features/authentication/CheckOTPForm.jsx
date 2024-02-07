import { useState } from "react";
import { checkOTP } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import OTPInput from "react-otp-input";
import toast from "react-hot-toast";
import { HiArrowRight } from "react-icons/hi";

const CheckOTPForm = ({ phoneNumber, onStepHandler }) => {
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
    <div>
      <button
        className="flex gap-x-2 items-center mb-4 text-secondary-500"
        onClick={onStepHandler}
      >
        <span>
          <HiArrowRight />
        </span>
        <span className="text-sm">بازگشت</span>
      </button>
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
    </div>
  );
};

export default CheckOTPForm;
