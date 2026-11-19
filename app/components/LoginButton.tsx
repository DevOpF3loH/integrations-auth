"use-client";

import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    await signIn("microsoft-entra-id");
    setIsLoading(false);
  };
  return (
    <button
      onClick={handleLogin}
      disabled={isLoading}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-blue-400 sm:px-6 sm:py-3"
    >
      {isLoading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}
      {isLoading ? "Signing in..." : "Login With Microsoft"}
    </button>
  );
};

export default LoginButton;
