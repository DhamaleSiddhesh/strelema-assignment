import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

//   const isLoggedIn = localStorage.getItem("isLoggedIn");

//   if (isLoggedIn == 'true') {
//     return <Navigate to="/dashboard" replace />;
//   }

  const handleSubmit = async (e) => {
    console.log("triggered");
    setLoading(true);
    setError("");

    e.preventDefault();

    // const companyPhone = "7768860976";
    // const companyPassword = "Strelema@2026";

    // if (companyPhone === phone && companyPassword === password) {
    //   localStorage.setItem("isLoggedIn", "true");
    //   navigate("/dashboard");
    // } else {
    //   setError("Invalid phone or password");
    // }

    try {
      const response = await axios.post(
        "https://strelema-task.onrender.com/api/auth/login",
        {
          phone,
          password,
        }
      );
      //   console.log(response);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userToken", response.data.token);
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/img/Main Background Image.png')",
      }}
    >
      <div className="bg-white p-10 shadow-lg rounded-3xl">
        <p className="pb-5 font-bold">Login</p>

        <form className="" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="phone"
              className="text-gray-700 block py-2 font-bold"
            >
              {" "}
              phone Number
            </label>
            <input
              className="border rounded-sm py-1 px-3"
              placeholder="Enter your Phone number"
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className=" text-gray-700 block py-2 font-bold"
            >
              {" "}
              Password
            </label>
            <input
              className="border rounded-sm py-1 px-3"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center mt-2">
            <input
              id="show-password"
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="mr-2 accent-blue-600 cursor-pointer"
            />
            <label
              htmlFor="show-password"
              className="text-sm text-gray-600 cursor-pointer select-none"
            >
              Show password
            </label>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* <div> */}
          <button
            type="submit"
            className={`font-bold w-full mt-5 text-white bg-blue-500 py-2 px-4 rounded-2xl 
                ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
