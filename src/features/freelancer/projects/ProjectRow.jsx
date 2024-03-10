import { useState } from "react";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import localDateShort from "../../../utils/localDateShort";
import toPersianFormat from "../../../utils/toPersianFormat";
import truncateString from "../../../utils/truncateString";
import { MdAssignmentAdd } from "react-icons/md";
import CreateProposal from "../../proposals/CreateProposal";

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
  const [isRequst, setIsRequest] = useState(false);
  const { title, budget, deadline, status, _id } = project;

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
        <button
          className="flex justify-center w-full"
          onClick={() => {
            setIsRequest(true);
          }}
        >
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
        <Modal
          title={`درخواست برای پروژه ${title}`}
          open={isRequst}
          onClose={() => setIsRequest(false)}
        >
          <CreateProposal projectId={_id} onClose={() => setIsRequest(false)} />
        </Modal>
      </td>
    </Table.Row>
  );
};
export default ProjectRow;
