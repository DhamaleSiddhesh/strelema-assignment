import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-5 bg-white shadow-md rounded-t-2xl">
      <h1 className="text-2xl font-bold text-gray-700">All Employees</h1>

      <div className="relative">
        <button
          onClick={handleLogout}
          className="py-2 px-5 bg-red-600 rounded-lg font-bold text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
