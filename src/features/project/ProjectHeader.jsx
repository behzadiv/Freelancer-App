import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

const ProjectHeader = ({ project }) => {
  const moveBack = useMoveBack();
  return (
    <div className="flex items-center gap-x-4">
      <button onClick={moveBack}>
        <HiArrowRight className="w-5 h-5" />
      </button>
      <p className="font-black text-secondary-700 text-lg">
        لیست درخواست های {project.title}
      </p>
    </div>
  );
};

export default ProjectHeader;
