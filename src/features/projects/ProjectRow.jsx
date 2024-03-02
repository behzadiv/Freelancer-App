import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { IoTrashOutline } from "react-icons/io5";
import DeleteProject from "./DeleteProject";
import useRemoveProject from "./useRemoveProject";
import AddNewProject from "./AddNewProject";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import localDateShort from "../../utils/localDateShort";
import toPersianFormat from "../../utils/toPersianFormat";
import truncateString from "../../utils/truncateString";
import ToggleProjectStatus from "./ToggleProjectStatus";

const ProjectRow = ({ project, index }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  const { removeProject } = useRemoveProject();

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateString(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianFormat(project.budget)}</td>
      <td>{localDateShort(project.deadline)}</td>
      <td>
        <div className="flex gap-2 justify-center flex-wrap max-w-[200px]">
          {project.tags.map((tag) => {
            return (
              <span className="badge badge--secondary" key={tag}>
                {tag}
              </span>
            );
          })}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
        {/* {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )} */}
      </td>
      <td>
        <div className="flex justify-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <LuPencilLine className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              title={`ویرایش ${project.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              <AddNewProject
                isOpenEditForm={isEditOpen}
                projectToEdit={project}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsRemoveOpen(true)}>
              <IoTrashOutline className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`حذف ${project.title}`}
              open={isRemoveOpen}
              onClose={() => setIsRemoveOpen(false)}
            >
              <DeleteProject
                onClose={() => setIsRemoveOpen(false)}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsRemoveOpen(false),
                  })
                }
                resourceName={project.title}
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
};
export default ProjectRow;
