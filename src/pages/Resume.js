import React from 'react';
import "../App.css";
import { Helmet } from 'react-helmet';

function Resume() {
    return (
        <div className="conatiner-fuild">
            <Helmet>
                <title>Resume</title>
            </Helmet>
            <div className="header">
                <h2>Resume</h2>
            </div>
            <img src={require("../images/resume0.png").default} alt="Slide" className="resume"></img>
            <img src={require("../images/resume1.png").default} alt="Slide" className="resume"></img>
        </div>
    );
}

export default Resume;