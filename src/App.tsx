import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from "./components/header/Header";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Portfolio from "./components/Portfolio";
import ContactPage from "./components/contact/ContactPage";
import Feedback from "./components/feedback/FeedbackCarousel";
import Footer from "./components/footer/Footer";
import "./App.css";
import Experience from "./components/experience/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const currentPath = location.pathname;

  const showMainContent = !["/contact", "/portfolio"].includes(currentPath);

  return (
    <div className="App">
      <Header />
      <div className="main-content">
      {showMainContent && (
        <>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Feedback />
        </>
      )}
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </div>
      <Footer
        homeUrl="/"
        portfolioUrl="/portfolio"
        contactUrl="/contact"
        aboutUrl="/about"
        linkedInUrl="https://www.linkedin.com/in/your-profile"
        githubUrl="https://github.com/your-username"
      />
    </div>
  );
}

export default App;