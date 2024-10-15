import "./App.css";
import Footer from "./Components/footer";
import Header from "./Components/Header";
import ProjectCard from "./Components/ProjectCard";
import SkillBar from "./Components/SkillBar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/Styles/index.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<ProjectCard />} />
            <Route path="/skill" element={<SkillBar />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
