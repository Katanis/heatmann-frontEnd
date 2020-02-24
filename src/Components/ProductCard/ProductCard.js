import React from 'react';
import { Link } from 'react-router-dom';

const productCard = props => {
  const style = {
    container: {
      overflow: 'none',
      margin: '0 5px 30px',
      boxShadow: '0px 1px 5px 5px rgba(0,0,0,0.1)',
      maxWidth: '30%',
      minWidth: '30%'
    },
    mobileContainer: {
      overflow: 'none',
      margin: '20px',
      boxShadow: '0px 1px 5px 5px rgba(0,0,0,0.1)',
      maxWidth: '100%'
    },
    image: {
      width: '100%',
      maxWidth: '-webkit-fill-available'
    },
    productName: {
      fontFamily: 'Oswald',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '118.2%',
      textTransform: 'uppercase',
      color: '#535353',
      padding: '20px'
    },
    productDescription: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '11px',
      lineHeight: '15px',
      color: '#535353',
      padding: '20px'
    },
    link: {
      textDecoration: 'none'
    }
  };

  return (
    <div style={props.mobileScreen ? style.mobileContainer : style.container}>
      <Link style={style.link} to={'/product/' + props.link}>
        <p style={style.productName}>{props.name}</p>
        <img style={style.image} alt="product" src={props.url}></img>
        <p style={style.productDescription}>{props.description}</p>
      </Link>
    </div>
  );
};

export default productCard;
