import React from 'react';
import { Link } from 'react-router-dom';

const projectCard = props => {
  const style = {
    container: {
      position: 'relative',
      textAlign: 'center',
      margin: '40px',
      maxWidth: '300px',
      height: '50vw',
      maxHeight: '450px',
      width: '300px',
      boxShadow: '-5px -5px 30px 5px rgba(83, 83, 83, 0.34), 5px 5px 30px 5px rgba(83, 83, 83, 0.34)',
      background:
        'linear-gradient(180deg, #F96302 0%, rgba(249, 99, 2, 0) 44.08%)',
      backgroundSize: 'cover',
      border: '1px #FFFFFF',
      borderRadius: '5px'
    },
    pcContainer: {
      position: 'relative',
      textAlign: 'center',
      margin: '40px',
      maxWidth: '100%',
      height: '50vw',
      maxHeight: '450px',
      width: '28vw',
      boxShadow: '-5px -5px 30px 5px rgba(83, 83, 83, 0.34), 5px 5px 30px 5px rgba(83, 83, 83, 0.34)',
      background:
        'linear-gradient(180deg, #F96302 0%, rgba(249, 99, 2, 0) 44.08%)',
      backgroundSize: 'cover',
      border: '1px #FFFFFF',
      borderRadius: '5px'
    },
    textBottom: {
      position: 'absolute',
      bottom: '20px',
      left: '10px',
      fontFamily: 'Oswald',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '30px',
      textTransform: 'uppercase',
      color: '#FFFFFF',
      textAlign: 'left'
    },
    textBottomMobile: {
      position: 'absolute',
      bottom: '20px',
      left: '10px',
      fontFamily: 'Oswald',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '20px',
      textTransform: 'uppercase',
      color: '#FFFFFF',
      textAlign: 'left'
    },
    image: {
      maxWidth: '100%',
      borderRadius: '5px'
    },
    link: {
      textDecoration: 'none'
    }
  };

  return (
    <div>
      <Link
        style={style.link}
        to={{
          pathname: '/project/' + props.link,
          state: {
            description: props.description,
            text: props.text,
            url: props.url,
            text2: props.text2,
            products: props.products,
            address: props.address,
            projectid: props.projectid,
            link: props.link
          }
        }}
      >
        {console.log("PRODUCT CARD: "+ props.projectid)}
        <div
          style={
            props.hideNav
              ? {
                  ...style.container,
                  backgroundImage:
                    'linear-gradient(rgba(249, 99, 2, 0.12) 0%, rgba(249, 99, 2, 0.2) 58.33%, #F96302 88.54%), url(' +
                    props.url +
                    ')'
                }
              : {
                  ...style.pcContainer,
                  backgroundImage:
                    'linear-gradient(rgba(249, 99, 2, 0.12) 0%, rgba(249, 99, 2, 0.2) 58.33%, #F96302 88.54%), url(' +
                    props.url +
                    ')'
                }
          }
        >
          <p style={props.hideNav? style.textBottomMobile : style.textBottom}>{props.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default projectCard;
