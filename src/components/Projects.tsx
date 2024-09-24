import React, { useState } from 'react';
import Project from './Project.jpg';
import './Project.css';
import WorkHistory from './WorkHistory';

const Projects: React.FC = () => {
  const [showWorkHistory, setShowWorkHistory] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = 600; // Root margin of 84px
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      // Use requestAnimationFrame for smoother scrolling
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    }
  };
  

  const handleButtonClick = () => {
    setShowWorkHistory(!showWorkHistory);
    if (!showWorkHistory) {
      setTimeout(() => {
        scrollToSection('work-history');
      }, 100); // Delay to allow state update and render
    }
  };

  return (
    <>
      <div className="bg-yellow-300 font-sans">
        <div className="container mx-auto px-4 py-12">
          <img src={Project} alt="Project 1" className="project-image" />
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Look at my recent projects</h1>
            <div className="w-24 h-1 bg-black mx-auto mt-2"></div>
          </div>

          <div className="relative flex items-center">
            <button
              onClick={handleButtonClick}
              className="absolute left-0 ml-4 text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-8 h-8 transition-transform duration-500 ${showWorkHistory ? 'rotate-180' : ''}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {showWorkHistory && (
        <div id="work-history">
          <WorkHistory />
        </div>
      )}
    </>
  );
};

export default Projects;
