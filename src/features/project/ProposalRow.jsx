import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import toPersianFormat from "../../utils/toPersianFormat";
import truncateString from "../../utils/truncateString";
import ChangeProposalStatus from "./ChangeProposalStatus";

const ProposalRow = ({ proposal, index }) => {
  const { user, description, duration, price, status } = proposal;
  const [open, setOpen] = useState(false);
  const statusStyle = [
    { className: "badge--danger", label: "رد شده" },
    { className: "badge--secondary", label: "در انتظار تایید" },
    { className: "badge--success", label: "تایید شده" },
  ];

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{truncateString(description, 50)}</td>
      <td>{duration} روز</td>
      <td>{toPersianFormat(price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title="تغییر وضعیت درخواست"
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)} className="w-full">
          تغییر وضعیت
        </button>
      </td>
    </Table.Row>
  );
};

export default ProposalRow;
