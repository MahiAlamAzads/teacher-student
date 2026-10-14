import StudentDashboardLedger from "./StudentDashboardLedger";
import { dashboardData } from "../../../src/data/data";
import { Link } from "react-router-dom";
const StudentDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-4">
      {dashboardData.map((subject) => (
        <div className="mb-6 p-3 border border-gray-300 rounded-3xl" key={subject.subject}>
          <div className="flex flex-col justify-center items-center mb-4 group group-hover:text-[blue]">
            <Link className="text-xl font-semibold hover:text-blue-400 hover:underline">{subject.subject}</Link>
            <Link className="text-sm text-gray-700 hover:text-green hover:underline">({subject.teacherName})</Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 ">
            {subject.data.map((item) => (
              <StudentDashboardLedger
                key={item.label}
                ledger={item.label}
                value={item.value}
                requiredDate={item.requiredDate}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;
