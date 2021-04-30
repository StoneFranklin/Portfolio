import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/" >Stone Franklin</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">Projects <span className="sr-only">(current)</span></Link>
                <Link className="nav-item nav-link" to="/Resume">Resume</Link>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;