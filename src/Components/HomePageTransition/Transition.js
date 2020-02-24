import React from 'react';

const Transition = props => {
  return (
    <div
      className="transition-container1"
      style={
        props.firstTransitionVisible
          ? { opacity: 1 }
          : {  height: 0, opacity: 0 }
      }
    >
      <img
        alt="Heatmann Logo"
        className="logo"
        src="http://18.189.49.66:3000/images/logos_Headmann-big.png"
      ></img>
      <h1>Controll Your Climate With Us</h1>
    </div>
  );
};

export default Transition;
