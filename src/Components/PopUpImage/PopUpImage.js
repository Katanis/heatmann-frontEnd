import React from 'react';

const PopUp = props => {
  return (
    <div style={props.imageStyle}>
      <button style={{position: 'absolute', fontSize: '18px' }} onClick={props.closeImage}>Close</button>
      <img style={{width: '100%'}} alt={props.name} src={props.url}></img>
    </div>
  );
};

export default PopUp;
