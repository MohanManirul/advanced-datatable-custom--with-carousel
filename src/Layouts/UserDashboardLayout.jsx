import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/users/dashboard/LeftSidebar";
import UserDropdown from "../components/users/dashboard/UserDropdown";

const UserDashboardLayout = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* LeftSidebar */}
      <div className="w-64 bg-gray-800 text-white h-full">
        <LeftSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white text-black h-full overflow-auto">
        <div className="flex justify-end items-center gap-4 p-4">
          <UserDropdown />
        </div>

        <Outlet />
        
      </div>
    </div>
  );
};

export default UserDashboardLayout;
