import React from "react";
import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router";

const WrapperLayout = () => {
  return (
    <div className="flex flex-1 md:ml-0 overflow-auto">
      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default WrapperLayout;
