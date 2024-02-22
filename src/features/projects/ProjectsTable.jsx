import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import TableRow from "../../ui/TableRow";

const ProjectsTable = () => {
  const { projects, isLoading } = useOwnerProjects();
  
  if (isLoading) return <Loading />;
  if (projects?.length === 0) return <div>خالی</div>;

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => {
            return <TableRow index={index} data={project} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;