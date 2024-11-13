import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='nav'>
      <div className="logo_section">
        <img src={logo} alt="" />
      </div>
      
      <div className="nav-middle">
        <div className="clg_detail_section">
          <h3>Sanketika Polytechnic College</h3>
          <p className="nav_description">Where Knowledge Meets Excellence</p>
          <p className='nav_description'>(Approved By AICTC New Delhi & Affiliated To SBTET Govt.Of Ap)</p>
        </div>
        <div className="nav_menu">
          <div className="nav_link">Home</div>
          <div className="nav_link">Academics</div>
          <div className="nav_link">Admissions</div>
          <div className="nav_link">About Us</div>
        </div>
      </div>

      <div className="logo2_section">
        <img src={logo2} alt="" />
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`nav_menu_mobile ${menuOpen ? 'show' : ''}`}>
        <div className="nav_link">Home</div>
        <div className="nav_link">Academics</div>
        <div className="nav_link">Admissions</div>
        <div className="nav_link">About Us</div>
      </div>
    </div>
  );
};

export default Navbar;
