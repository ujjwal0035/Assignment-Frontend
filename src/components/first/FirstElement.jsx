import React from 'react';
import './first.css'

const FirstElement = () => {
    return (
        <div className="mainContainer">
            <div className="box1">
                <h1 className="heading">Let's build the Future of design, now</h1>
                <p className="content">Create amazing tools integrations for 1 million users or customers Marvel for your Team</p>
                <button className="btn submit">Submit your app</button>
                <button className="btn">View API Docs</button>
            </div>
            <div className="imageContainer">
                <img className="img" src="./assets/illustration.png" alt="illustration.png"></img>
            </div>
        </div>
    );
};

export default FirstElement;