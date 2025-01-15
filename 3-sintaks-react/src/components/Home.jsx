import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login validation logic here
    navigate("/dashboard");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here
    alert("Registration Successful!");
    setIsRegistering(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-600">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isRegistering ? "Create an Account" : "Welcome Back"}
        </h2>
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          {!isRegistering && (
            <>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Email:
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">
                Password:
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </>
          )}

          {isRegistering && (
            <>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Full Name:
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">
                Email:
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">
                Password:
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </>
          )}

          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>

        <p className="text-center mt-4">
          {isRegistering ? (
            <span>
              Already have an account?{" "}
              <button
                onClick={() => setIsRegistering(false)}
                className="text-blue-500 hover:underline"
              >
                Login here
              </button>
            </span>
          ) : (
            <span>
              Don't have an account?{" "}
              <button
                onClick={() => setIsRegistering(true)}
                className="text-blue-500 hover:underline"
              >
                Register here
              </button>
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
