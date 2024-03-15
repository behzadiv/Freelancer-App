import { useNavigate } from "react-router-dom";
import { HiArrowLeft, HiExclamationCircle } from "react-icons/hi";

const NotAccess = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center pt-20 gap-y-4 container xl:max-w-screen-xl h-screen bg-secondary-0">
      <div className="flex items-center gap-x-2">
        <HiExclamationCircle className="w-5 h-5 text-error" />
        <h1 className="text-xl font-bold text-secondary-700">
          شما به این قسمت دسترسی ندارید
        </h1>
      </div>
      <button
        className="flex items-center gap-x-2"
        onClick={() => navigate("/")}
      >
        <span className="text-secondary-700">خانه</span>
        <HiArrowLeft className="w-5 h-5 font-bold text-primary-900" />
      </button>
    </div>
  );
};

export default NotAccess;
