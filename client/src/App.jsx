import Header from "./components/Header";
import HomePage from "./pages/home/Page";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import TeacherPage from "./pages/teacher/TeacherPage";
import StudentPage from "./pages/student/StudentPage";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentJoinToTeacher from "./pages/student/StudentJoinToTeacher";
import StudentProfile from "./pages/student/StudentProfile";
function RootLayout() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/student",
        element: <StudentPage />,
        children: [
          { index: true, element: <StudentDashboard /> },
          { path: "join", element: <StudentJoinToTeacher /> },
          { path: "profile", element: <StudentProfile /> },
        ],
      },
      { path: "/teacher", element: <TeacherPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
