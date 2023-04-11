import React from "react";
import img from '../../assets/group.png';
import './hero.css';


function Hero() {
    return (
        <div className="container flex">
            <div className="content">
                <h1>Marilou</h1>
                <h2>Services de garde d'animaux de qualité pour votre tranquilité d'esprit</h2>
                <h3>Seine et marne</h3>
                <button className="cta_contact">Me contacter<span className="material-icons">keyboard_arrow_right</span></button>
            </div>
            <img src={img} alt="dog pic" />
        </div>
    );
}

export default Hero