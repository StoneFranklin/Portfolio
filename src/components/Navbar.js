import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="nav navbar-dark">
            <Link to="/" className="projects-link nav-link">
                Projects
            </Link>
        
            <Link to="/Resume" className="nav-link">
                Resume
            </Link>
        </nav>
    );
}

export default Navbar;