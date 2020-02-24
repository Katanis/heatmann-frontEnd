import React from 'react';
import { Link } from 'react-router-dom';
// import '../../Screens/MainScreen/Main.css';

const path = 'http://18.189.49.66:3000';

const styles = {
  h1: {
    marginTop: '50px'
  },
  projectDisplayDesktop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 30px 5px',
    borderBottomLeftRadius: '30px',
    borderTopLeftRadius: '30px',
    margin: '30px 0'
  },
  projectMobileDisplay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 30px 5px',
    // borderTopRightRadius: '30px',
    // borderTopLeftRadius: '30px',
    borderRadius: '30px',
    margin: '30px 0'
  }
};

const Card = props => {
  return (
    
    <div
      style={
        props.screenLarge
          ? styles.projectMobileDisplay
          : styles.projectDisplayDesktop
      }
    >
      <div
        style={props.screenLarge ? { maxWidth: '100%' } : { maxWidth: '50%' }}
      >
        <h2>{props.title}</h2>
        {props.screenLarge ? null : (
          <Link
            className="transition-link"
            style={
              props.seconds
                ? { opacity: 0, height: 0 }
                : { opacity: 1, height: 'auto' }
            }
            to={props.linkTo1}
          >
            <span style={{fontSize: '20px'}}>{props.name1}</span>
          </Link>
        )}

        {props.screenLarge ? null : (
          <Link
            className="transition-link"
            style={
              props.seconds
                ? { opacity: 1, height: 'auto' }
                : { opacity: 0, height: 0 }
            }
            to={props.linkTo2}
          >
            <span style={{fontSize: '20px'}}>{props.name2}</span>
          </Link>
        )}
      </div>

      <div
        id="cf2"
        className="shadow"
        style={props.screenLarge ? { maxWidth: '100%' } : { maxWidth: '50%' }}
      >
        <img
          style={props.seconds ? { opacity: 0 } : { opacity: 1 }}
          alt="first"
          className="bottom"
          src={props.url1}
        />
        <img
          style={props.seconds ? { opacity: 1 } : { opacity: 0 }}
          alt="second"
          className="top"
          src={props.url2}
        />
      </div>
    </div>
  );
};

export default Card;
