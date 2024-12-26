import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;