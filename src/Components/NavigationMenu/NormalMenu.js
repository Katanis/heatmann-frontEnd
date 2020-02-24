import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavigationMenu extends React.Component {
  render() {
    const styles = {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '99',
        opacity: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#FFF',
        width: '100%',
        color: 'Orange',
        fontFamily: 'open-sans'
      },
      logo: {
        margin: '0 auto'
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '50px',
        // filter: this.state.menuOpen ? 'blur(2px)' : null,
        transition: 'filter 0.5s ease'
      },
      link: {
        textDecoration: 'none',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        textAlign: 'justify',
        color: '#535353',
        marginTop: '5px',
        marginLeft: '10px',
        marginRight: '10px',
        borderBottom: '0.25px solid #E1E1E1;'
      },
      line: {
        width: '100%',
        height: '2px',
        background: '#AFB1B3',
        margin: '0 auto'
        // animation: '0.5s shrink forwards',
        // animationDelay:this.props.delay,
      }
    };
    return (
      <div>
        <div style={{margin: '30px 150px'}} >
          <Link to="/">
            <img alt="heamtann-logo" src={this.props.logo}></img>
          </Link>
          <div style={{ display: 'flex', float: 'right'}}>
            <Link style={styles.link} to="/products">
              Products
            </Link>
            <Link style={styles.link} to="/projects">
              Projects
            </Link>
            <Link style={styles.link} to="/about">
              About us
            </Link>
          </div>
        </div>
        <div style={styles.line}></div>
      </div>
    );
  }
}

export default NavigationMenu;
