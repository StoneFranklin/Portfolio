import React from 'react';
import '../App.css';

function GooglePlayLink(props) {
    return (
        <>
            <a type="button" className="btn btn-primary" href={props.googlePlay} target="_blank" rel="noopener noreferrer">Google Play</a>
        </>
    );
}

export default GooglePlayLink;