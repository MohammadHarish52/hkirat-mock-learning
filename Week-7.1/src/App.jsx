import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
