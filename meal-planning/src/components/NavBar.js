import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Logo</Link>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        <li><Link to="/" className="nav-links">Home</Link></li>
        <li><Link to="/about" className="nav-links">About</Link></li>
        <li><Link to="/services" className="nav-links">Services</Link></li>
        <li><Link to="/contact" className="nav-links">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;