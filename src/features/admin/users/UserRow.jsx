import { useState } from "react";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStatus";

const statusStyle = [
  { className: "badge--danger", label: "رد شده" },
  { className: "badge--secondary", label: "در انتظار تایید" },
  { className: "badge--success", label: "تایید شده" },
];

const UserRow = ({ user, index }) => {
  const { name, email, phoneNumber, role, status, _id: id } = user;
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
          <ChangeUserStatus userId={id} onClose={() => setOpen(false)} />
        </Modal>
      </td>
    </Table.Row>
  );
};

export default UserRow;
