import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faAddressBook,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

interface FooterProps {
  homeUrl?: string;
  portfolioUrl?: string;
  contactUrl?: string;
  aboutUrl?: string;
  linkedInUrl?: string;
  githubUrl?: string;
}

const Footer: React.FC<FooterProps> = ({
  homeUrl,
  portfolioUrl,
  contactUrl,
  aboutUrl,
  linkedInUrl,
  githubUrl,
}) => {
  return (
    <footer className="footer">
      <a
        href={homeUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Home"
      >
        <FontAwesomeIcon icon={faHome} />
      </a>
      <a
        href={portfolioUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Portfolio"
      >
        <FontAwesomeIcon icon={faBriefcase} />
      </a>
      <a
        href={contactUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact"
      >
        <FontAwesomeIcon icon={faAddressBook} />
      </a>
      <a
        href={aboutUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="About"
      >
        <FontAwesomeIcon icon={faUser} />
      </a>
      <a
        href={linkedInUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href={githubUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
