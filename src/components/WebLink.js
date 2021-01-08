import React from 'react';
import "../App.css";

function WebLink(props) {
    return (
        <>
            <a type="button" className="btn btn-primary" href={props.link} target="_blank" rel="noopener noreferrer">See It</a>
        </>
    );
}

export default WebLink;