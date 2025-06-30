import { useEffect, useState } from "react";
import { component, tabs } from "../utils/data";
import { makeApiCall } from "../services/makeApiCall";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("My details");
  const [activeRole, setActiveRole] = useState("Superadmin");
  const [userRoles, setUserRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const generateAvatars = (count) => {
    return count.map((item) => {
      return (
        <div className="w-[25px] h-[25px] rounded-full -ml-2 first:ml-0">
          <img src={item} className="w-full h-full rounded-full" />
        </div>
      );
    });
  };

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    if (status === "Active") {
      return `${baseClasses} bg-[#ECFDF3] text-[#027A48]`;
    }
    return `${baseClasses} bg-[#F2994A] text-[white]`;
  };

  const fetchUserRoles = async () => {
    try {
      setLoading(true);
      const response = await makeApiCall({
        url: "/roles",
      });
      setUserRoles(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserRoles();
  }, []);

  const totalItems = userRoles.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = userRoles.slice(startIndex, endIndex);

  const ActiveComponent = component[activeTab];

  console.log(ActiveComponent);

  return (
    <div className="w-full">
      <div className="p-4 lg:p-6">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Header */}
          <div className="hidden lg:block mb-6">
            <h1 className="text-[30px] font-[500] text-[#101828] mb-2">
              Settings
            </h1>
            <p className="text-[#667085] font-[400] text-[16px]">
              Manage your team and preferences here.
            </p>
          </div>
        </div>

        <div
          className="w-full md:w-[800px] border border-[#D0D5DD] rounded-[8px]"
          style={{
            boxShadow: "0px 1px 2px 0px #1018280D",
          }}
        >
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-4 py-2 cursor-pointer ${
                  index > 0 ? "border-l" : ""
                } ${
                  index < tabs.length - 1 ? "border-r" : ""
                } border-[#D0D5DD] font-[500] text-[14px] text-[#344054] transition-colors`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <ActiveComponent
          setActiveRole={setActiveRole}
          loading={loading}
          error={error}
          activeRole={activeRole}
          currentItems={currentItems}
          generateAvatars={generateAvatars}
          getStatusBadge={getStatusBadge}
          userRoles={userRoles}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          fetchUserRoles={fetchUserRoles}
        />
      </div>
    </div>
  );
};

export default Settings;
