import React from 'react';
import '../App.css';
import Carousel from './Carousel';
import { Helmet } from 'react-helmet';

function Project(props) {
    return (
        <>
            <Helmet>
                <title>{props.name}</title>
            </Helmet>
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
