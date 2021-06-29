import React from 'react';
import './fourth.css'
const FourthElement = () => {
    return (
        <div className="mainContainer">
            <div className="imageContainer">
                <img className="img" src="./assets/botbot.png" alt="botbot.png"></img>
            </div>

            <div className="box1 box4">
                <h1 className="heading">A Slack-boat for creating amd managing Prototype</h1>
                <p className="content">Building Something Special? We are always looking to work with partener who wants to help the world bring their idea to life</p>
                <button className="btn submit2">Become a partener</button>
                <button className="btn abc">View Integrations</button>
            </div>
            
        </div>
    );
};

export default FourthElement;