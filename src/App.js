import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  isRouteErrorResponse,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#282828";
      // showalert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      // showalert("Light mode has been enabled", "success");
    }
  };
  return (
    <div>
      <Router>
        <NavBar  mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<TextForm mode={mode} />} />
          <Route path="/about" element={<About mode={mode}  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
