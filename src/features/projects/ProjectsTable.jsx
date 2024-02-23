import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import ProjectRow from "./ProjectRow";
import Table from "../../ui/Table";

const ProjectsTable = () => {
  const { projects, isLoading } = useOwnerProjects();

  if (isLoading) return <Loading />;
  if (projects?.length === 0) return <div>خالی</div>;

  return (
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
          return <ProjectRow index={index} data={project} key={project._id} />;
        })}
      </Table.Body>
    </Table>
  );
};

export default ProjectsTable;
