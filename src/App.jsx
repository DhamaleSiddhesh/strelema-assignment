import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") == "true";

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <LandingPage />
          </MainLayout>
        }
      />

      <Route
        path="/hotels"
        element={
          <MainLayout>
            <h1 className="p-8">Hotels page</h1>
          </MainLayout>
        }
      />
      <Route
        path="/flight"
        element={
          <MainLayout>
            <h1 className="p-8">Flight page</h1>
          </MainLayout>
        }
      />
      <Route
        path="/destinations"
        element={
          <MainLayout>
            <h1 className="p-8">destination page </h1>
          </MainLayout>
        }
      />
      <Route
        path="*"
        element={
          <MainLayout>
            <h1 className="p-8">404 Not Found</h1>
          </MainLayout>
        }
      />

      {/* admin */}
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          isLoggedIn ? (
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
