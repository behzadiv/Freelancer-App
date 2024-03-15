import { useState } from "react";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";

const statusStyle = [
  { className: "badge--danger", label: "رد شده" },
  { className: "badge--secondary", label: "در انتظار تایید" },
  { className: "badge--success", label: "تایید شده" },
];

const UserRow = ({ user, index }) => {
  const { name, email, phoneNumber, role, status } = user;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{role}</td>
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
            setOpen(true);
          }}
        >
          تغییر وضعیت
        </button>
        <Modal
          title={`تغییر وضعیت ${name}`}
          open={open}
          onClose={() => setOpen(false)}
        >
          initial modal
        </Modal>
      </td>
    </Table.Row>
  );
};

export default UserRow;
