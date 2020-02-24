import React from 'react';

const MobileScreen = props => {
  const style = {
    mainImage: {
      position: 'relative',
      textAlign: 'center',
      maxWidth: '100%',
      backgroundSize: 'cover',
      height: '70vw',
      maxHeight: '450px',
      border: '1px #FFFFFF',
      borderRadius: '5px'
    },
    textBottom: {
      position: 'absolute',
      bottom: '0',
      left: '10px',
      fontFamily: 'Oswald',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '20px',
      textTransform: 'uppercase',
      color: '#FFFFFF'
    },
    projectYear: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '16px',
      paddingLeft: '10px',
      color: '#535353'
    },
    text: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '15px',
      paddingLeft: '10px',
      color: '#535353'
    }
  };
  return (
    <div>
      <div
        style={{
          ...style.mainImage,
          backgroundImage:
            'linear-gradient(to top, #535353 0%, rgba(83, 83, 83, 0.04) 54.48%), url(' +
            props.url +
            ')'
        }}
      >
        <h1 style={style.textBottom}>{props.description}</h1>
      </div>
      <p style={style.projectYear}>{props.address}</p>
      <p style={style.text}>{props.text}</p>
      <p style={style.text}>
        <span style={{ fontSize: 'bold', fontWeight: 'bold' }}>
          Heatmann Product(s):
        </span>{' '}
        {props.products}
      </p>
      <p style={style.text}>{props.text2}</p>
    </div>
  );
};

export default MobileScreen;
