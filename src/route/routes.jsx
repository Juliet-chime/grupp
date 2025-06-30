import Settings from "../pages/Settings";
import WrapperLayout from "./WrapperLayout";

export const baseRoutes = [
  {
    element: <WrapperLayout />,
    children: [
      { path: "/", element: <Settings /> },
      { path: "dashboard", element: <div>Dashboard</div> },
      { path: "project", element: <div>Projects</div> },
      { path: "tasks", element: <div>Task</div> },
      { path: "reporting", element: <div>Reporting</div> },
      { path: "users", element: <div>Users</div> },
      { path: "support", element: <div>Support</div> },
      { path: "setting", element: <Settings /> },
    ],
  },
];
