import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './Header.css';

const Header: React.FC = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.slice(1) || 'home';
    setActiveSection(path);

    // Scroll to top when navigating to contact
    if (path === 'contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -84; // Root margin of 84px
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
      navigate(`/${sectionId}`);
    }
  };
  

  return (
    <animated.header style={fade}>
      <div className="header-container">
        <div className="text-name">Gunvansh</div>
        <nav>
          <div className="navbar-container">
          <Link 
              to="/home"  
              className={activeSection === 'home' ? 'navbar-item active' : 'navbar-item'} 
              onClick={() => scrollToSection('home')}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={activeSection === 'about' ? 'navbar-item active' : 'navbar-item'} 
              onClick={() => scrollToSection('about')}
            >
              About Me
            </Link>
            <Link 
              to="/experience" 
              className={activeSection === 'experience' ? 'navbar-item active' : 'navbar-item'} 
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </Link>
            <Link 
              to="/contact" 
              className={activeSection === 'contact' ? 'navbar-item active' : 'navbar-item'}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Contact
            </Link>
            <Link 
              to="/portfolio" 
              className={activeSection === 'portfolio' ? 'navbar-item active' : 'navbar-item'}
            >
              Portfolio
            </Link>
          </div>
        </nav>
      </div>
    </animated.header>
  );
};

export default Header;
