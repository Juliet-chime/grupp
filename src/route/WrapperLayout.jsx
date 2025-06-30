import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router";
import { useAppContext } from "../context/AppContext";
import { Menu } from "lucide-react";
import LogoWrapper from "../component/LogoWrapper";

const WrapperLayout = () => {
  const { showSideBar, setShowSideBar } = useAppContext();
  return (
    <div className="flex flex-1 md:ml-0 overflow-auto">
      <div
        className={`
      hidden md:flex
      fixed md:left-0 md:top-0 md:h-screen
      md:w-[300px]
      bg-white border-r border-[#F9FAFB]
      px-3 py-2 flex-col
      z-20
    `}
      >
        <Sidebar />
      </div>
      <div
        className={`
      relative flex flex-col h-full overflow-y-auto bg-[#F9FAFB]
      md:ml-[300px]
    `}
      >
        <div className="flex justify-between px-6 py-4 cursor-pointer sm:hidden">
          <LogoWrapper />
          <Menu onClick={() => setShowSideBar(!showSideBar)} />
        </div>
        {showSideBar ? (
          <div className="border h-screen top-0 w-[250px] bg-white flex flex-col fixed z-10">
            <Sidebar />
          </div>
        ) : null}
        <Outlet />
      </div>
    </div>
  );
};

export default WrapperLayout;
