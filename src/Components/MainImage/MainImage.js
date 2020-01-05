import React from 'react';

Image = props => {
  const style = {
    smallImage: {
      width: '80px',
      padding: '10px',
      cursor: 'pointer',
      maxHeight: '80px'
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: '20px',
      justifyContent: 'space-between',
      alignCenter: 'center'
    },
    bigImage: {
      width: '90vw',
      margin: '4%'
    },
    title: {
      textAlign: 'left',
      fontFamily: 'Oswald',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '36px',
      lineHeight: '118.2%',
      textTransform: 'uppercase',
      color: '#535353',
      margin: '4%'
    },
    description: {
      textAlign: 'left',
      fontFamily: 'Oswald',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '118.2%',
      textTransform: 'uppercase',
      color: '#535353',
      margin: '15px'
    }
  };
  return (
    <div>
      <h1 style={style.title}>{props.name}</h1>
      <img
        id="main-image"
        style={style.bigImage}
        alt={props.name + 'image'}
        src={props.url}
      ></img>
    </div>
  );
};

export default Image;
