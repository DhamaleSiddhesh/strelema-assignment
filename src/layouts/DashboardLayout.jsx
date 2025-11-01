import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <DashboardHeader />
        <main className="flex-grow p-5">{children}</main>
      </div>

    </div>
  );
};

export default DashboardLayout;
