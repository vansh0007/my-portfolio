import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from "react-spring";


const Portfolio = () => {
    const slideIn = useSpring({
        opacity: 1,
        transform: "translateX(0)",
        from: { opacity: 0, transform: "translateX(-100px)" },
      });
    
      return (
        <animated.section style={slideIn}>
          <h2>Portfolio</h2>
          <p>Your introduction goes here...</p>
        </animated.section>
      );
    };


export default Portfolio;
