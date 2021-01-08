import React from 'react';
import "../App.css";
import { projectData } from '../data';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div> 
            <div className="header">
                <h2>Projects</h2>
            </div>
            
            <div className="row justify-content-center">
            {
                projectData.map((data, key) => {
                    return (
                        <Link className="single-project card bg-black text-light" 
                            to={{
                                pathname: "/Details",
                                state: {
                                    name: data.name,
                                    description: data.description,
                                    carouselImages: data.carouselImages,
                                    github: data.github,
                                    googlePlay: data.googlePlay,
                                    link: data.link,
                                    language: data.language
                                }
                            }} key={key}>
                            <img className="card-img-top pic" src={data.image} alt=""></img>
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text">{data.language}</p>
                            </div>
                        </Link>
                    ); 
                }
                )
            }
            </div>
        </div>
    );
}

export default Projects;
