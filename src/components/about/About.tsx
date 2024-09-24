import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { ReactComponent as PaperSvg } from "./paper.svg";
import { ReactComponent as Element } from "./element.svg";
import "./About.css";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensure it triggers every time
    threshold: 0.3,
  });

  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100px)",
    config: { duration: 600 }, // Adjust duration to slow down the animation
  });

  const handleDownloadCV = () => {
    const cvUrl = "https://drive.google.com/file/d/1EPhiWt3vvQUDAzQPWKc__O5_v2k10kEK/view?usp=sharing";
    window.open(cvUrl, "_blank");
  };

  return (
    <animated.section ref={ref} style={slideIn}>
      <div id="about" className="about-container">
        <div className="items-center">
          <div className="items-container">
            <div className="text-yellow experience bold margin-right">8</div>
            <div>
              <h2 className="title bold">Years of Experience</h2>
              <p className="name text-yellow bold">Gunvansh</p>
            </div>
          </div>
          <div className="about-me">
            <div className="about-me-container">
              <Element />
              <h3 className="about-me-title bold">
                About Me _____
              </h3>
            </div>
            <p className="about-me-description">
              With 8 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
            </p>
            <button className="btn" onClick={handleDownloadCV}>
              Download CV
              <PaperSvg className="btn-svg" />
            </button>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default About;
