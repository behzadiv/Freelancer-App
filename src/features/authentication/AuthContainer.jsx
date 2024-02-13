import { useState } from "react";
import SendOTPForm from "./SendOtpForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOTP } from "../../services/authService";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending:isOtpPending, mutateAsync,data:otpResponse } = useMutation({
    mutationFn: getOTP,
  });

  const sendOTPHandler = async (e) => {
    e.preventDefault();
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
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            isOtpPending={isOtpPending}
            onSendOTPHandler={sendOTPHandler}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
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
