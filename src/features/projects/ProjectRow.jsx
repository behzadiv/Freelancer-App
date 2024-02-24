import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import localDateShort from "../../utils/localDateShort";
import toPersianFormat from "../../utils/toPersianFormat";
import truncateString from "../../utils/truncateString";
import { LuPencilLine } from "react-icons/lu";
import { IoTrashOutline } from "react-icons/io5";

const ProjectRow = ({ data, index }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateString(data.title, 30)}</td>
      <td>{data.category.title}</td>
      <td>{toPersianFormat(data.budget)}</td>
      <td>{localDateShort(data.deadline)}</td>
      <td>
        <div className="flex gap-2 justify-center flex-wrap max-w-[200px]">
          {data.tags.map((tag) => {
            return (
              <span className="badge badge--secondary" key={tag}>
                {tag}
              </span>
            );
          })}
        </div>
      </td>
      <td>{data.freelancer?.name || "-"}</td>
      <td>
        {data.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td>
        <div className="flex justify-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <LuPencilLine className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              title={`ویرایش ${data.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              this is modal
            </Modal>
          </>
          <>
            <button onClick={() => setIsRemoveOpen(true)}>
              <IoTrashOutline className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`حذف ${data.title}`}
              open={isRemoveOpen}
              onClose={() => setIsRemoveOpen(false)}
            >
              this is modal
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
};
export default ProjectRow;
