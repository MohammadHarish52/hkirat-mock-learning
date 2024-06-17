import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/Signup";
import { AppBar } from "./components/AppBar";
import AddCourse from "./components/AddCourse";

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div
        className={`font-poppins ${
          isNightMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
        } min-h-screen flex flex-col`}
      >
        <AppBar isNightMode={isNightMode} onToggleNightMode={toggleNightMode} />
        <div
          className={`bg-${
            isNightMode ? "gray-700" : "blue-100"
          } rounded-lg shadow-md overflow-hidden w-full md:w-96 ${
            isNightMode
              ? "animate__animated animate__pulse animate__infinite"
              : ""
          }`}
        >
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />
            <Route path="/signin" Component={SignIn} />
            <Route path="/signup" Component={SignUp} />
            <Route path="/Addcourse" Component={AddCourse} />
            {/* Add more routes for other pages if needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  // You can render your home component here
  return <h1>Welcome to Aceshell Home!</h1>;
}

export default App;
