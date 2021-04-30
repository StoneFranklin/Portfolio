import React from 'react';
import '../App.css';

function Carousel(props) {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide center" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner"> 
                    <div className="carousel-item active">
                        <img className="d-block " src={props.carouselImages[0]} alt="Slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block " src={props.carouselImages[1]} alt="Slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block " src={props.carouselImages[2]} alt="Slide" />
                    </div>  
                    <div className="carousel-item">
                        <img className="d-block " src={props.carouselImages[3]} alt="Slide" />
                    </div>                     
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    );
}

export default Carousel;