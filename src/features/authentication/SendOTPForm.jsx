import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "../../services/authService";
import TextField from "../../ui/TextField";

const SendOTPForm = ({ setStep }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOTP,
  });

  const sendOTPHandler = async (e) => {
    e.preventDefault();
    try {
      //const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success("کد تایید ارسال شد.");
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <form className="space-y-5" onSubmit={sendOTPHandler} >
      <TextField
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button className="btn btn-primary w-full" type="submit">
        ارسال کد تایید
      </button>
    </form>
  );
};

export default SendOTPForm;
