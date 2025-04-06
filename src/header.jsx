// Header.jsx
import { useState } from "react";
import icon from "./assets/icons8-menu.gif";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">IK.</div>
        <div className="menu" onClick={toggleMenu}>
          <img src={icon} alt="Menu" />
        </div>
        <div className={`nav-container ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a></li>
          </ul>
          <div className="social-links">
            <a href="https://www.instagram.com/ishimwekevin2007/" className="social-link">
              <img src="https://img.icons8.com/ios-filled/24/000000/instagram.png" alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/in/kevin-ishimwe-3b1036307/" className="social-link">
              <img src="https://img.icons8.com/ios-filled/24/000000/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;