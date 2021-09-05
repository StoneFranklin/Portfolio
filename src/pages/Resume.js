import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

function Resume() {
    return (
        <div className="container-fuild" id="resume-main">
            <div className="resume">
                <div className="resume-block">
                    <h3>Education</h3>
                    <p>University of North Georgia, Dahlonega, GA</p>
                    <p>Pursuing Bachelor’s Degree in Computer Science</p>
                    <p><span className="bold">GPA</span>: 4.0</p>
                    <p>Graduating December 2021</p>
                    <p>
                    Relevant Coursework: Web Programming, Mobile Application Development, 
                    Databases, Data Structures and Analysis of Algorithms, Software Engineering, 
                    Script Programming, Programming Languages, Operating Systems, 
                    Computer Organization and Architecture
                    </p>
                </div>
                <div className="resume-block">
                    <h3>Experience</h3>
                    <p>Research Assistant at the University of North Georgia</p>
                    <p>May 2021 – present</p>
                    <ul>
                        <li>Perform machine learning experiments on multiple supercomputers.</li>
                        <li>Created Singularity containers to be run on supercomputers.</li>
                        <li>Modified DeepHyperX, a Python tool for running machine learning experiments on hyperspectral images. I added a metric for training and testing time, as well as adding an output for the ground truth and prediction images.</li>
                        <li>Developed a website for the research project using React.</li>
                        <li>
                            <a href="https://github.com/StoneFranklin/DeepHyperX/tree/singularity-images">
                                DeepHyperX
                            </a>
                        </li>
                        <li>
                            <a href="https://stonefranklin.github.io/research-project-website/">
                                Website (still in progress)
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="resume-block">
                    <h3>Projects</h3>
                    <Link to="/">See all projects</Link>
                </div>
                <div className="resume-block">
                    <h3>Additional Skills</h3>
                    <p>
                        JavaScript, Java, Python, React, HTML/CSS, NodeJS / Express, 
                        MongoDB, MySQL, MS SQL Server, Git/GitHub, React Native, 
                        Android Development, iOS Development, Swift, Unity/C#, 
                        Containers (Docker and Singularity), .NET, PHP, Linux
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Resume;