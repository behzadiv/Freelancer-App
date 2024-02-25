import { useState } from "react";
import SendOTPForm from "./SendOtpForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOTP } from "../../services/authService";
import { useForm } from "react-hook-form";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { handleSubmit, register, getValues } = useForm();

  const {
    isPending: isOtpPending,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOTP,
  });

  const sendOTPHandler = async (data) => {
    try {
      //const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success("کد تایید ارسال شد.");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            register={register}
            isOtpPending={isOtpPending}
            onSendOTPHandler={handleSubmit(sendOTPHandler)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onStepHandler={() => setStep((s) => s - 1)}
            onResendOtp={sendOTPHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full">{renderStep()}</div>;
};

export default AuthContainer;
