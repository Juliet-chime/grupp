import applogo from "../assets/image/content.png";
import customerService from "../assets/image/customerservice.svg";
import {
  BarChart3,
  CheckSquare,
  FileText,
  Folder,
  HelpCircle,
  Home,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import { NavLink } from "react-router";
import { useAppContext } from "../context/AppContext";

const Sidebar = () => {
  const { showSideBar } = useAppContext();

  const sidebarItems = [
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
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? "bg-[#F9FAFB] text-[#101828]"
        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
    }`;
  return (
    <div
      className={`bg-white border w-full md:w-[350px] px-3 py-2 md:block 
        flex 
        h-screen
        ${showSideBar ? "flex-col" : ""}
        ${showSideBar ? "" : "hidden"}`}
    >
      <div className="flex items-center gap-3">
        <img src={applogo} />
        <span className="font-[900] text-[#101828] text-2xl">Untitled UI</span>
      </div>
      <div className="mt-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Olivia Rhye"
            className="w-full pl-8 pr-4 py-2 border border-[#D6BBFB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6BBFB] focus:border-transparent placeholder:text-[#101828] placeholder:pl-2"
            readOnly
            style={{
              boxShadow: `0px 0px 0px 4px #F4EBFF,0px 1px 2px 0px #1018280D`,
            }}
          />
          <div className="absolute left-2.5 top-2.5 w-[20px] h-[20px] text-[#667085]">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 mt-3">
        <ul className="space-y-1">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.link} href="#" className={linkClass}>
                <item.icon className="w-5 h-5 text-[#344054] font-[500]" />
                <span className="flex-1 text-[#344054] text-[16px] font-[500]">
                  {item.label}
                </span>
                {item.count && (
                  <span className="bg-[#F2F4F7] text-[#344054] text-[14px] px-2 py-0.5 rounded-full text-xs font-medium">
                    {item.count}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="py-4 px-2 md:p-2 mt-2">
        <div className="bg-[#F9FAFB] p-4 rounded-lg">
          <h4 className="font-[500] text-[14px] text-[#101828] mb-1">
            New features available!
          </h4>
          <p className="font-[400] text-[14px] text-[#667085] mb-3">
            Check out the new dashboard view. Pages now load faster.
          </p>
          <div className="w-full h-[136px] bg-gray-200 rounded-lg mb-3 overflow-hidden">
            <img
              src={customerService}
              alt="Feature preview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-5 text-sm">
            <button className="text-[#667085] text-[14px] font-[500] hover:text-[#667085]">
              Dismiss
            </button>
            <button className="text-[#6941C6] text-[14px] font-[500] hover:text-[#6941C6]">
              What's new?
            </button>
          </div>
        </div>
      </div>

      <div className="py-1 border-t border-[#EAECF0]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
            OR
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between">
              <p className="font-[500] text-[14px] text-[#101828] truncate">
                Olivia Rhye
              </p>
              <div>
                <LogOut className="text-[#667085] cursor-pointer" />
              </div>
            </div>
            <p className="text-[14px] font-[400] text-[#667085] truncate">
              olivia@untitledui.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
