import { useState } from "react";
import { Switch } from "@headlessui/react";
import useToggleProject from "./useToggleStatus";

const ToggleProjectStatus = ({ project }) => {
  const [enabled, setEnabled] = useState(
    project.status === "OPEN" ? true : false
  );
  const { togglingStatus } = useToggleProject();
  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSE" : "OPEN";
    togglingStatus(
      {
        id: project._id,
        data: { status },
      },
      {
        onSuccess: () => {
          setEnabled((prev) => !prev);
        },
      }
    );
  };
  return (
    <Switch.Group className="w-[5rem]">
      <div className="flex items-center">
        <Switch.Label className="ml-2">
          {project.status === "OPEN" ? "باز" : "بسته"}
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={toggleHandler}
          className={`${
            enabled ? "bg-primary-800" : "bg-secondary-200"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
        >
          <span
            className={`${
              enabled ? "-translate-x-6" : "-translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};

export default ToggleProjectStatus;
