import React from 'react';
import certificate from './images/Bootcamp_Certificate.jpg';
import './App.css';

function Body() {
    return (
        <div className='App-Body'>
            <h3>Here is some text blah blah howdy blah</h3>
            <img className='Bootcamp_Certificate' src={certificate} alt='bootcamp certificate' />
        </div>
    )
}

export default Body;