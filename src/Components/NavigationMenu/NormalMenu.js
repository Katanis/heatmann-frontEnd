import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navigation.css';

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
        fontFamily: 'open-sans',
      },
      logo: {
        margin: '0 auto',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '50px',
        // filter: this.state.menuOpen ? 'blur(2px)' : null,
        transition: 'filter 0.5s ease',
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
        borderBottom: '0.25px solid #E1E1E1;',
      },
      line: {
        width: '100%',
        height: '2px',
        background: '#AFB1B3',
        margin: '0 auto',
        // animation: '0.5s shrink forwards',
        // animationDelay:this.props.delay,
      },
    };

    function Mycomponent() {
      const { t, i18n } = useTranslation();
      return (
        <div style={{ display: 'flex', float: 'right' }}>
          <Link className="glow"  to="/products">
            {t('data.topNavigation.products')}
          </Link>
          <Link className="glow"  to="/projects">
            {t('data.topNavigation.projects')}
          </Link>
          <Link className="glow"  to="/about">
            {t('data.topNavigation.about')}
          </Link>
        </div>
      );
    }
    return (
      <div>
        <div style={{ margin: '30px 150px' }}>
          <Link to="/">
            <img alt="heamtann-logo" src={this.props.logo}></img>
          </Link>
          <Suspense fallback="loading">
            <Mycomponent />
          </Suspense>
        </div>
        <div style={styles.line}></div>
      </div>
    );
  }
}

export default NavigationMenu;
