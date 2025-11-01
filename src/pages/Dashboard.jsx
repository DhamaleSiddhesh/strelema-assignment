import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setsearch ] = useState("");

  const userToken = localStorage.getItem("userToken");
  // console.log("token" , userToken)

  // const employees = [
  //   {
  //     id: 1,
  //     name: "John1",
  //     department: "Marketing",
  //     designation: "Manager",
  //     status: "Permanent",
  //   },
  //   {
  //     id: 2,
  //     name: "john2",
  //     department: "Engineering",
  //     designation: "Developer",
  //     status: "contact",
  //   },
  // ];

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          "https://strelema-task.onrender.com/api/employees",
          { headers: { Authorization: `Bearer ${userToken}` } }
        );

        if (response.data.success) {
          setEmployees(response.data.data);
        } else {
          setError("Failed to fetch employees");
        }
        setLoading(false);
      } catch (error) {
        setError("Error fetching employees");
      }
    };

    fetchEmployees();
  }, [userToken]);

  const searchedEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase()) ||
      emp.designation.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;

  const totalPages = Math.ceil(searchedEmployees.length / itemsPerPage);

  const paginatedEmployees = searchedEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <div>
      <div className="container border border-gray-300 mx-auto shadow-lg min-h-screen rounded-2xl p-5">
        <div className="topbar flex justify-between shadow-lg p-3">
          <input
            type="search"
            className=" border border-gray-400 rounded-lg px-2 py-3"
            placeholder="Search "
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          <div className="">
            <button className="mx-2 bg-blue-800 rounded-2xl text-white font-bold py-3 px-5">
              Add new Employee
            </button>
            <button className="mx-2 bg-gray-200 shadow-2xl rounded-2xl text-black font-bold py-3 px-5">
              Filter
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-center py-10">Loading...</p>
        ) : error ? (
          <p className="text-center py-10 text-red-500">{error}</p>
        ) : (
          <>
            <table className="min-w-full bg-white border border-gray-200">
              <thead className=" text-gray-700">
                <tr>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Employee ID</th>
                  <th className="py-2 px-4 text-left">Department</th>
                  <th className="py-2 px-4 text-left">Designation</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedEmployees.map((emp) => (
                  <tr key={emp.id} className="shadow-sm">
                    <td className="py-2 px-4">{emp.id}</td>
                    <td className="py-2 px-4">{emp.name}</td>
                    <td className="py-2 px-4">{emp.department}</td>
                    <td className="py-2 px-4">{emp.designation}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-5 py-1 rounded-md text-blue-950 ${
                          emp.status === "Permanent"
                            ? "bg-purple-200"
                            : "bg-orange-300"
                        }`}
                      >
                        {emp.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 space-x-2 flex">
                      <button className=" text-black p-2 rounded cursor-pointer">
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className=" text-black p-2 rounded cursor-pointer">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className=" text-black p-2 rounded cursor-pointer">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-4 space-x-2">
              <button
                onClick={handlePrev}
                disabled={currentPage == 1}
                className="px-4 py-1 text-sm bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Previous
              </button>

              <span className="px-4 py-2 text-sm">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-1 text-sm  bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
