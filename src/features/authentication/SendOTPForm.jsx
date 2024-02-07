import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

const SendOTPForm = ({
  phoneNumber,
  onChange,
  isOtpPending,
  onSendOTPHandler,
}) => {
  return (
    <form className="space-y-5" onSubmit={onSendOTPHandler}>
      <TextField
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        onChange={onChange}
      />
      {isOtpPending ? (
        <Loading />
      ) : (
        <button className="btn btn-primary w-full" type="submit">
          ارسال کد تایید
        </button>
      )}
    </form>
  );
};

export default SendOTPForm;
