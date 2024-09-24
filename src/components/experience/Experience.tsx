import React, { useState } from 'react';
import './Experience.css'; // Import your CSS file
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import SkillsData from './SkillsData';
import EducationData from './EducationData';
import ExperienceData from './ExperienceData';
import { ReactComponent as TopArrowSvg } from "./top-arrow.svg";

const Experience = () => {
  const [activeSection, setActiveSection] = useState("skills");

  const [ref, inView] = useInView({
    triggerOnce: false, // Ensure it triggers every time
    threshold: .1,
  });

  const modernAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0) scale(1) rotate(0deg)" : "translateX(-100px) scale(0.8) rotate(-10deg)",
    config: { duration: 600 }, // Adjust duration to 600ms
  });

  const slideInSkills = useSpring({
    opacity: activeSection === 'skills' ? 1 : 0,
    transform: activeSection === 'skills' ? "translateX(0)" : "translateX(100%)",
  });

  const slideInEducation = useSpring({
    opacity: activeSection === 'education' ? 1 : 0,
    transform: activeSection === 'education' ? "translateX(0)" : "translateX(100%)",
  });

  const slideInExperience = useSpring({
    opacity: activeSection === 'experience' ? 1 : 0,
    transform: activeSection === 'experience' ? "translateX(0)" : "translateX(100%)",
  });

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <animated.div ref={ref} style={modernAnimation} id="experience" className="experience-class-container">
      <div className="text-center">
        <h2 className="text-3xl font-bold">My expert areas</h2>
        <div className="mt-2 mb-8">
          <div className="inline-block h-1 w-24 bg-black"></div>
        </div>
        <p className="text-zinc-600 mb-6">
          You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal. You can express yourself however you want and whenever you free.
        </p>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
          My Resume
        </button>
      </div>
      <div className='skills-container'>
        <div className="experience-text-container">
          <button className="experience-links" onClick={() => handleSectionClick('skills')}><span>Skills </span>  <TopArrowSvg /></button>
          <button className="experience-links" onClick={() => handleSectionClick('education')}><span>Experience</span>   <TopArrowSvg /></button>
          <button className="experience-links education" onClick={() => handleSectionClick('experience')}><span>Education</span>   <TopArrowSvg /></button>
        </div>

        <div>
          <animated.div style={slideInSkills}>
            {activeSection === 'skills' && <SkillsData />}
          </animated.div>
          <animated.div style={slideInEducation}>
            {activeSection === 'education' && <EducationData />}
          </animated.div>
          <animated.div style={slideInExperience}>
            {activeSection === 'experience' && <ExperienceData />}
          </animated.div>
        </div>
      </div>
    </animated.div>
  );
};

export default Experience;
