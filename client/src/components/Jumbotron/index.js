import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Jumbotron.css';
function JumbotronComp() {
    return (
        <Jumbotron className="title">
            <h1>React Google Books Search</h1>
            <h4>
                Search and Save Books of Interest
            </h4>
        </Jumbotron>
    );
}

export default JumbotronComp;