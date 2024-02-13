import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <div className="bg-secondary-0 px-8 py-4">header</div>
      <div className="bg-secondary-500 row-start-1 row-span-2">siddebar</div>
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-md flex flex-col gap-y-12">
          {<Outlet />}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
