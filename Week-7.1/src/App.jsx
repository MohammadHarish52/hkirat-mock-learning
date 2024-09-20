import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import "./App.css";
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={"...Loading"}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={"...Loading"}>
              <About />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
