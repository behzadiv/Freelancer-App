import useToggleProject from "./useToggleStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

const ToggleProjectStatus = ({ project }) => {
  const { status, _id: id } = project;
  const { isUpdating, togglingStatus } = useToggleProject();
  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    togglingStatus({
      id,
      data: { status: newStatus },
    });
  };
  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height="20" width="20" />
      ) : (
        <Toggle
          enabled={status === "OPEN" ? true : false}
          onChange={toggleHandler}
          label={status === "OPEN" ? "باز" : "بسته"}
        />
      )}
    </div>
  );
};

export default ToggleProjectStatus;
