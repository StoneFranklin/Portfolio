import React from 'react';
import "../App.css";

function Resume() {
    return (
        <>
            <div className="header">
                <h2>Resume</h2>
            </div>
            <img src={require("../images/resume0.png").default} alt="Slide" className="resume"></img>
            <img src={require("../images/resume1.png").default} alt="Slide"></img>
        </>
    );
}

export default Resume;