import React from 'react';
import logo from '../../assets/marilou-logo-cropped.png';
import './banner.css';

function Banner() {
    return  (
        <div className='mrl-banner flex'>
            <img src={logo} alt="Marilou logo" className='mrl-logo'/>
            <ul className='flex'>
                <li><a href="" onClick={test}>Accueil</a></li>
                <li><a href="">Prestations</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    )
}

function test() {
    console.log('test')
}

export default Banner