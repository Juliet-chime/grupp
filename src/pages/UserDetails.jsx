import {
  Check,
  ChevronDown,
  CloudDownload,
  Download,
  Mail,
  Plus,
  Users,
} from "lucide-react";
import { availableRoles } from "../utils/data";
import Pagination from "../component/Pagination";

const UserDetails = ({
  setActiveRole,
  loading,
  error,
  activeRole,
  currentItems,
  generateAvatars,
  getStatusBadge,
  userRoles,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  fetchUserRoles,
}) => {
  return (
    <div>
      <div className="space-y-6 mt-4">
        <div>
          <h2 className="text-lg font-[500] text-[#101828] text-[18px] mb-2">
            User Roles
          </h2>
          <p className="text-[#667085] font-[400] text-[14px]">
            Update your roles details and information.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-6">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Connected email
              <span className="block text-sm font-normal text-gray-500">
                Select role account
              </span>
            </label>

            <div className="space-y-3">
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="email"
                    className="text-purple-600"
                  />
                  <div className="flex flex-col">
                    <span className="text-[#344054] font-[500] text-[14px]">
                      My account email
                    </span>
                    <span className="text-[14px] font-[400] text-[#667085]">
                      olivia@untitledui.com
                    </span>
                  </div>
                </label>
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="email"
                    className="text-purple-600"
                  />
                  <span className="text-[#344054] font-[500] text-[14px]">
                    An alternative email
                  </span>
                </label>
              </div>
              <div className="flex items-center gap-2 px-5 py-2 border-1 border-[#D0D5DD] bg-[white] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D0D5DD] focus:border-transparent">
                <Mail className="w-[15px] h-[15px] text-[#667085]" />
                <input
                  type="email"
                  placeholder="billing@untitledui.com"
                  style={{
                    boxShadow: "0px 1px 2px 0px #1018280D",
                  }}
                  className=" w-[488px] border-0 bg-[white] focus:outline-none focus:ring-0 focus:ring-['transparent'] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-t border-[#EAECF0] mt-4 py-4">
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Active Role
          <span className="block text-sm font-normal text-gray-500">
            Select active role available to the user.
          </span>
        </label>

        <div className="space-y-3">
          {availableRoles.map((role, index) => (
            <div
              key={index}
              className={`border rounded-lg w-[700px] p-4 ${
                activeRole === role.name
                  ? "border-[#D6BBFB] bg-[#F9F5FF]"
                  : "border-[#EAECF0] bg-[#FFFFFF]"
              }`}
            >
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="activeRole"
                    value={role.name}
                    checked={activeRole === role.name}
                    onChange={(e) => setActiveRole(e.target.value)}
                    className="text-purple-600"
                  />
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center rounded-[6px] w-[46px] h-[30px] border border-[#F2F4F7] ${
                        activeRole === role.name ? "bg-[white]" : ""
                      }`}
                    >
                      <Users className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <div
                        className={`font-[500] ${
                          activeRole === role.name
                            ? "text-[#53389E]"
                            : "text-[#344054]"
                        } text-[14px] `}
                      >
                        {role.name}
                      </div>
                      <div
                        className={`font-[400] text-[14px] ${
                          activeRole === role.name
                            ? "text-[#7F56D9]"
                            : "text-[#70798C]"
                        } `}
                      >
                        Last active {role.lastActive}
                      </div>
                      <div className="flex gap-2">
                        <button
                          className={`font-[400] text-[14px] ${
                            activeRole === role.name
                              ? "text-[#9E77ED]"
                              : "text-[#667085]"
                          } `}
                        >
                          Set as default
                        </button>
                        <button
                          className={` text-[#6941C6] font-[500] text-[14px]`}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="activeRole"
                    value={role.name}
                    checked={activeRole === role.name}
                    onChange={(e) => setActiveRole(e.target.value)}
                    className="text-purple-600"
                  />
                </div>
              </label>
            </div>
          ))}
          <button className="mt-4 flex items-center gap-2 text-[#667085] hover:text-[#667085] font-medium">
            <Plus className="w-4 h-4 text-[#667085]" />
            Add role to user
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">User Roles</h3>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
            <Download className="w-4 h-4" />
            Download all
          </button>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6941C6] mx-auto"></div>
            <p className="mt-2 text-gray-500">Loading roles...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-500">Error loading roles: {error}</p>
            <button
              onClick={fetchUserRoles}
              className="mt-2 text-purple-600 hover:text-purple-700 font-medium"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            {!!userRoles.length ? (
              <div
                className="overflow-x-auto border border-[#EAECF0] rounded-[8px]"
                style={{
                  boxShadow:
                    "0px 2px 4px -2px #1018280F, 0px 4px 8px -2px #1018281A",
                }}
              >
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left text-[12px] py-3 px-4 font-[500] text-[#667085]">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          Name
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th className="text-left text-[12px] py-3 px-4 font-[500] text-[#667085]">
                        Type
                      </th>
                      <th className="text-left text-[12px] py-3 px-4 font-[500] text-[#667085]">
                        Date created
                      </th>
                      <th className="text-left text-[12px] py-3 px-4 font-[500] text-[#667085]">
                        Status
                      </th>
                      <th className="text-left text-[12px] py-3 px-4 font-[500] text-[#667085]">
                        Role users
                      </th>
                      <th className="w-10"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentItems.map((role) => (
                      <tr
                        key={role.id}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <input type="checkbox" className="rounded" />
                            <span className="font-[500] text-[14px] text-[#101828]">
                              {role.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`font-[400] text-[12px] text-[#667085]`}
                          >
                            {role.type}
                          </span>
                        </td>
                        <td className="font-[400] text-[14px] text-[#667085]">
                          {role.date}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`flex items-center justify-center gap-3 w-[80px] ${getStatusBadge(
                              role.status
                            )}`}
                          >
                            {role?.status?.toLowerCase() === "active" ? (
                              <Check className="w-[13px]" />
                            ) : (
                              ""
                            )}
                            {role.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {generateAvatars(role.users)}
                            </div>
                            {role.users > 4 && (
                              <span className="text-sm text-gray-500 font-medium">
                                +{role.users - 4}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3">
                          <CloudDownload className="w-[18px] text-[#667085]" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px] w-full">
                <div className="text-center">
                  <h2 className="text-lg font-[500] text-[#101828] text-[18px] mb-2">
                    You haven't assigned a role to a user
                  </h2>
                  <p className="text-[#667085] font-[400] text-[14px]">
                    Please assign role
                  </p>
                </div>
              </div>
            )}
          </>
        )}

        {userRoles <= 1 ? null : (
          <Pagination
            data={userRoles}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default UserDetails;
