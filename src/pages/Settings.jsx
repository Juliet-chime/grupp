import { Menu } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Settings = () => {
  const { showSideBar, setShowSideBar } = useAppContext();
  return (
    <div className="w-full">
      <div className="flex justify-end pr-6 py-2 cursor-pointer">
        <Menu onClick={() => setShowSideBar(!showSideBar)} />
      </div>
      Settings
    </div>
  );
};

export default Settings;
