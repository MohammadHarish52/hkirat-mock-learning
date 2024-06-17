import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function AppBar({ isNightMode, onToggleNightMode }) {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    function callback2(data) {
      if (data.username) {
        setUserEmail(data.username);
      }
    }

    function callback1(res) {
      res.json().then(callback2);
    }

    fetch("http://localhost/admin/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"), // Added space after "Bearer"
      },
    }).then(callback1);
  }, []);

  return (
    <div className={`bg-blue-500 p-4 flex justify-between items-center`}>
      <div className="flex items-center space-x-4">
        <h1 className={`text-lg font-bold text-white`}>Aceshell</h1>
      </div>
      <div className="flex items-center space-x-2">
        {!userEmail ? (
          <>
            <button
              className={`px-4 py-2 rounded bg-blue-200 text-blue-800 hover:bg-blue-300 transition duration-300 ease-in-out`}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </button>
            <button
              className={`px-4 py-2 rounded bg-blue-200 text-blue-800 hover:bg-blue-300 transition duration-300 ease-in-out`}
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sign In
            </button>
          </>
        ) : (
          <button
            className={`px-4 py-2 rounded bg-blue-200 text-blue-800 hover:bg-blue-300 transition duration-300 ease-in-out`}
            onClick={() => {
              navigate("/");
            }}
          >
            Log Out
          </button>
        )}
        <div
          onClick={onToggleNightMode}
          className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ${
            isNightMode
              ? "bg-blue-300 text-blue-800"
              : "bg-blue-200 text-blue-800"
          } hover:bg-${
            isNightMode ? "blue-400" : "blue-300"
          } transition duration-300 ease-in-out`}
        >
          {isNightMode ? "D" : "N"}
        </div>
      </div>
    </div>
  );
}
