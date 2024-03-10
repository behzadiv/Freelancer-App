import Table from "../../../ui/Table";
import localDateShort from "../../../utils/localDateShort";
import toPersianFormat from "../../../utils/toPersianFormat";
import truncateString from "../../../utils/truncateString";
import { MdAssignmentAdd } from "react-icons/md";

const statusStyle = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSE: {
    label: "بسته",
    className: "badge--danger",
  },
};

const ProjectRow = ({ project, index }) => {
  const { title, budget, deadline, status } = project;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateString(title, 30)}</td>
      <td>{toPersianFormat(budget)}</td>
      <td>{localDateShort(deadline)}</td>
      <td>
        {
          <span className={`badge ${statusStyle[status].className}`}>
            {statusStyle[status].label}
          </span>
        }
      </td>
      <td>
        <MdAssignmentAdd className="w-full h-5 text-primary-900"/>
      </td>
    </Table.Row>
  );
};
export default ProjectRow;
