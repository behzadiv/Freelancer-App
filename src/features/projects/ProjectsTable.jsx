import { useState } from "react";
import useOwnerProjects from "./useOwnerProjects";
import { HiPlus } from "react-icons/hi";
import Loading from "../../ui/Loading";
import ProjectRow from "./ProjectRow";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import AddNewProject from "./AddNewProject";

const ProjectsTable = () => {
  const { projects, isLoading } = useOwnerProjects();
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);

  if (isLoading) return <Loading />;
  if (projects?.length === 0) return <div>خالی</div>;

  return (
    <>
      <div className="flex items-center justify-between p-2">
        <span className="text-lg font-bold text-secondary-700">
          پروژه های شما
        </span>
        <button
          onClick={() => setIsNewProjectOpen(true)}
          className=" flex items-center gap-x-2 btn btn-primary"
        >
          <HiPlus className="w-5 h-5" />
          <span>اضافه کردن پروژه</span>
        </button>
      </div>
      <Modal
        title={"اضافه کردن پروژه جدید"}
        open={isNewProjectOpen}
        onClose={() => setIsNewProjectOpen(false)}
      >
        <AddNewProject isOpenModal={setIsNewProjectOpen} />
      </Modal>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => {
            return (
              <ProjectRow index={index} data={project} key={project._id} />
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default ProjectsTable;
