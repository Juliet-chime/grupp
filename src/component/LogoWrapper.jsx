import React from "react";
import applogo from "../assets/image/content.png";

const LogoWrapper = () => {
  return (
    <div className="flex items-center gap-3">
      <img src={applogo} />
      <span className="font-[900] text-[#101828] text-2xl">Untitled UI</span>
    </div>
  );
};

export default LogoWrapper;
