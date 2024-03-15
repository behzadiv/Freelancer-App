import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

const NotFound = () => {
  const moveBack = useMoveBack();

  return (
    <div className="flex flex-col items-center pt-20 gap-y-4 container xl:max-w-screen-xl bg-secondary-0 h-screen">
      <h1 className="text-xl font-bold text-secondary-700">
        صفحه ای که دنبالش بودید پیدا نشد
      </h1>
      <button className="flex items-center gap-x-2" onClick={moveBack}>
        <HiArrowRight className="text-xl font-bold text-primary-900" />
        <span className="text-secondary-700">بازگشت</span>
      </button>
    </div>
  );
};

export default NotFound;
