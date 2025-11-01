import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 shadow-md p-5 min-h-screen">
      <div className="mb-10">
        <img width={100} src="/assets/img/logo 1@2x.png" alt="" />
      </div>
      <ul className="space-y-3">
        <li>
          <a href="#" className="block px-3 py-2 rounded ">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="block px-3 py-2 rounded ">
            Employees
          </a>
        </li>
        <li>
          <a href="#" className="block px-3 py-2 rounded ">
            Reports
          </a>
        </li>
        <li>
          <a href="#" className="block px-3 py-2 rounded ">
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
