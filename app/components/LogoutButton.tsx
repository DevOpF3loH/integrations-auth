"use client";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="rounded-lg border border-blue-600 bg-white px-3 py-1.5 text-xs font-semibold text-blue-600 shadow-md transition-colors duration-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:px-6 sm:py-3 sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
