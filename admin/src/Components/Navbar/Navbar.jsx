import React from "react";
import './Navbar.css';
import logo from '../../assets/logo.gif';

const Navbar=()=>{
    return(
        <div className="navbar">
          <img src={logo} alt="Logo" className="nav-logo" />
        </div>
    )
}

export default Navbar;