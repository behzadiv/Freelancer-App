import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useUsers from "../useUsers";
import UserRow from "./UserRow";

const UsersTable = () => {
  const { users, isLoading } = useUsers();
  console.log(users);

  if (isLoading) return <Loading />;
  return (
   <div className="space-y-4">
    <h1 className="font-black text-xl text-secondary-700">کاربران</h1>
     <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users?.map((user, index) => {
          return <UserRow index={index} user={user} key={user._id} />;
        })}
      </Table.Body>
    </Table>
   </div>
  );
};

export default UsersTable;
