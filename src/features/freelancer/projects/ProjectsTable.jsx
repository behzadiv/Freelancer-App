import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useProjects from "./useProjects";
import ProjectRow from "./ProjectRow";
import Empty from "../../../ui/Empty";

const ProjectsTable = () => {
  const { projects, isLoading } = useProjects();
  if (isLoading) return <Loading />;
  if (projects?.length === 0) return <Empty resourceName="پروژه" />;

  return (
    <>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {projects?.map((project, index) => {
            return (
              <ProjectRow index={index} project={project} key={project._id} />
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default ProjectsTable;
