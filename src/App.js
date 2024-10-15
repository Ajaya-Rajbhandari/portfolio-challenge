import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, useTheme } from "./Context/ThemeContext";
import Header from "./Components/Header";
import Footer from "./Components/footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Project";
import Skills from "./Components/SkillBar";
import Contact from "./Pages/Contact";
import "../src/Styles/index.css";

const AppContent = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`App ${isDarkMode ? "dark" : "light-mode"}`}>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
