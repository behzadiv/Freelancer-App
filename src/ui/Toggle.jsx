import { Switch } from "@headlessui/react";

const Toggle = ({ enabled, onChange, label }) => {
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="ml-2">{label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={onChange}
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

export default Toggle;
