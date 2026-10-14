import { useState } from "react";
import { Link } from "react-router-dom";
const StudentSidebar = () => {
  const currentPath = window.location.pathname;
  const [selected, setSelected] = useState(currentPath);
  const data = [
    { name: "Dashboard", link: "/student" },
    { name: "Join to Teacher", link: "/student/join" },
    { name: "Profile", link: "/student/profile" },
  ];
  return (
    <aside className="hidden xl:block w-64 h-screen bg-gray-100 p-4">
      <h2 className="text-xl font-semibold">Student Sidebar</h2>
      <ul className="mt-4 space-y-2 border-t border-gray-300 pt-4 ">
        {data.map((item) => (
          <li className="" key={item.link}>
            <Link
              to={item.link}
              onClick={() => setSelected(item.link)}
              className={`text-gray-700 hover:text-blue-500 hover:bg-gray-200 p-1 block ${selected === item.link ? "bg-gray-200" : ""}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default StudentSidebar;
