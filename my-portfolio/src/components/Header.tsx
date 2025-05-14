import React from "react";
import "../styles/header.css";

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => (
  <header>
    <div className="header-content">
      <h1>Kent's Portfolio</h1>
      <a href="#" className="contact-link" onClick={e => { e.preventDefault(); onContactClick(); }}>
        Contact Me
      </a>
    </div>
  </header>
);

export default Header;