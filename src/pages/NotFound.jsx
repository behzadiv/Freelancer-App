import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center pt-10 gap-y-4">
      <h1 className="text-xl font-bold text-secondary-700">
        صفحه ای که دنبالش بودید پیدا نشد
      </h1>
      <button className="flex items-center gap-x-2" onClick={handleBack}>
        <HiArrowRight className="text-xl font-bold text-primary-900" />
        <span>بازگشت</span>
      </button>
    </div>
  );
};

export default NotFound;
