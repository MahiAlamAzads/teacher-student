import { Outlet } from "react-router-dom";
import StudentSidebar from "./StudentSidebar";

const StudentLayout = () => {
  return (
    <div className="flex gap-4">
      <StudentSidebar />
      <div className="flex-1 p-4 max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

const StudentPage = () => {
  return <StudentLayout />;
};

export default StudentPage;
