import { useState } from "react";
import axios from "axios";

export function SignUp() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`font-poppins ${
        isNightMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } min-h-screen flex flex-col items-center justify-center`}
    >
      <div className="mb-4 text-center">
        <p
          className={`text-sm ${isNightMode ? "text-white" : "text-gray-800"}`}
        >
          Welcome to Aceshell. Please sign up to continue.
        </p>
      </div>
      <div
        className={`bg-${
          isNightMode ? "gray-700" : "blue-100"
        } rounded-lg shadow-md overflow-hidden w-full md:w-96 ${
          isNightMode
            ? "animate__animated animate__pulse animate__infinite"
            : ""
        }`}
      >
        <div
          className={`bg-${
            isNightMode ? "gray-800" : "blue-500"
          } text-white py-8 text-center`}
        >
          <h1 className="text-xl font-bold">Sign Up</h1>
        </div>
        <div className="p-4 md:p-6">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-light">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-3 py-2 border rounded ${
                isNightMode
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800"
              } focus:outline-none focus:ring focus:border-${
                isNightMode ? "gray-500" : "blue-500"
              } transition duration-300 ease-in-out`}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-light">
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full px-3 py-2 border rounded ${
                isNightMode
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800"
              } focus:outline-none focus:ring focus:border-${
                isNightMode ? "gray-500" : "blue-500"
              } transition duration-300 ease-in-out`}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-${
              isNightMode ? "gray-800" : "blue-500"
            } text-white py-2 rounded hover:bg-${
              isNightMode ? "gray-900" : "blue-600"
            } transition duration-300 ease-in-out transform hover:scale-105`}
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/admin/signup",
                {
                  username: email,
                  password: password,
                }
              );
              let data = response.data;
              localStorage.setItem("token", data.token);
              window.location.href = "/";
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={toggleNightMode}
          className={`px-4 py-2 rounded ${
            isNightMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
          } hover:bg-${
            isNightMode ? "gray-800" : "gray-300"
          } transition duration-300 ease-in-out`}
        >
          {isNightMode ? "Switch to Day" : "Switch to Night"}
        </button>
      </div>
    </div>
  );
}
