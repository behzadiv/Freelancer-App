import { HiCollection, HiHome, HiOutlineUserGroup, HiOutlineViewGrid, HiUser, HiUserCircle, HiUserGroup, HiViewGrid } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

const AdminLayout = () => {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to={"dashboard"}>
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to={"users"}>
          <HiUserGroup />
          <span>کاربران</span>
        </CustomNavLink>
        <CustomNavLink to={"projects"}>
          <HiViewGrid />
          <span>پروژه ها</span>
        </CustomNavLink>
        <CustomNavLink to={"proposals"}>
          <HiCollection />
          <span>درخواست ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
};

export default AdminLayout;
