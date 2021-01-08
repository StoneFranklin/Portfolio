import React from 'react';
import '../App.css';
import Carousel from './Carousel';

function Project(props) {
    return (
        <>
            <h1 className="header">{props.name}</h1>

            <Carousel carouselImages={props.carouselImages}/>

            <div className="description">
                <p>{props.description}</p>
            </div>

            <a type="button" class="btn btn-primary" href={props.github} target="_blank" rel="noopener noreferrer">Github</a>
        </>
    );
}

export default Project;
