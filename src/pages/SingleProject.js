import React from 'react';
import "../App.css";
import GooglePlayLink from "../components/GooglePlayLink";
import Project from "../components/Project";
import WebLink from "../components/WebLink";

function SingleProject(props) {
    const { name, description, carouselImages, github, googlePlay, link, language } = props.location.state;
    if(language === "Android") {
        return (
            <div className="single-project">
                <Project name={name} description={description} carouselImages={carouselImages} github={github}/>
                <br />
                <GooglePlayLink googlePlay={googlePlay}/>
            </div>
        );
    }
    else if(language === "Web" && name !== "Mastery" && name !== "React 2048") {
        return (
            <div className="single-project">
                <Project name={name} description={description} carouselImages={carouselImages} github={github}/>
                <br />
                <WebLink link={link}/>
            </div>
        );
    }
    else {
        return (
            <div className="single-project">
                <Project name={name} description={description} carouselImages={carouselImages} github={github}/>
            </div>
        );
    }
}

export default SingleProject;