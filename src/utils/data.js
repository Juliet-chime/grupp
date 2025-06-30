import {
  BarChart3,
  CheckSquare,
  FileText,
  Folder,
  HelpCircle,
  Home,
  Settings,
  Users,
} from "lucide-react";
import UserDetails from "../pages/UserDetails";
import Profile from "../pages/Profile";
import Password from "../pages/Password";
import Team from "../pages/Team";
import Plan from "../pages/Plan";
import Roles from "../pages/Roles";
import { Notification } from "../pages/Notification";
import Integration from "../pages/Integration";
import Api from "../pages/Api";

export const tabs = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Roles",
  "Notifications",
  "Integrations",
  "API",
];

export const availableRoles = [
  { name: "Superadmin", lastActive: "06/2023", type: "admin" },
  { name: "Developeradmin", lastActive: "01/2023", type: "admin" },
  { name: "Supportadmin", lastActive: "10/2022", type: "admin" },
];

export const sidebarItems = [
  { icon: Home, label: "Home", count: null, link: "/" },
  { icon: BarChart3, label: "Dashboard", count: 10, link: "/dashboard" },
  { icon: Folder, label: "Projects", count: null, link: "/project" },
  { icon: CheckSquare, label: "Tasks", count: null, link: "/tasks" },
  { icon: FileText, label: "Reporting", count: null, link: "/reporting" },
  { icon: Users, label: "Users", count: null, link: "/users" },
  { icon: HelpCircle, label: "Support", count: null, link: "/support" },
  {
    icon: Settings,
    label: "Settings",
    count: null,
    active: true,
    link: "/setting",
  },
];

export const component = {
  "My details": UserDetails,
  Profile: Profile,
  Password: Password,
  Team: Team,
  Plan: Plan,
  Roles: Roles,
  Notifications: Notification,
  Integrations: Integration,
  API: Api,
};
