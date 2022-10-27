import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<TextForm />}/>
          <Route path="/about" element={<About />}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
