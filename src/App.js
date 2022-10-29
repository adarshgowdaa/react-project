import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#282828";
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Dark mode has been disabled", "success");
    }
  };
  return (
    <div>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <Routes>
          <Route path="/" element={<TextForm showAlert={showalert} mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
