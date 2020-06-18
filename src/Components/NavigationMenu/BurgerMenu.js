import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NormalMenu from './NormalMenu';
import FooterExternal from '../Footer/Footer';
import { useTranslation } from 'react-i18next';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      hideNav: null,
    };
  }

  resize() {
    let currentHideNav = window.innerWidth <= 760;
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideNav: currentHideNav });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const styles = {
      container: {
        position: 'absolute',
        top: '20px',
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
        height: 'auto',
        filter: this.state.menuOpen ? 'blur(2px)' : null,
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
        borderBottom: '0.25px solid #E1E1E1;',
      },
    };
    const MyComponent = (props) => {
      const { t, i18n } = useTranslation();

      return (
        <Menu open={props.menuOpen}>
          <Link style={styles.link} to="/products">
            {t('data.topNavigation.products')}
          </Link>
          <Link style={styles.link} to="/projects">
            {t('data.topNavigation.projects')}
          </Link>
          <Link style={styles.link} to="/about">
            {t('data.topNavigation.about')}
          </Link>
        </Menu>
      );
    }

    return (
      <div>
        {this.state.hideNav ? (
          <div>
            <div style={styles.container}>
              <Link to="/">
                <img alt="heamtann-logo" src={this.props.logo}></img>
              </Link>
              <MenuButton
                open={this.state.menuOpen}
                onClick={() => this.handleMenuClick()}
                color="orange"
              />
              <Suspense fallback="loading">
                <MyComponent menuOpen={this.state.menuOpen} />
              </Suspense>
            </div>
          </div>
        ) : (
          <NormalMenu logo={this.props.logo}></NormalMenu>
        )}

        <div
          style={
            this.state.hideNav
              ? { marginTop: '60px' }
              : { marginLeft: '150px', marginRight: '150px' }
          }
        >
          {this.props.children}
        </div>
        <div style={styles.body}>
          <FooterExternal></FooterExternal>
          {/* <Footer name="Menu" /> */}
        </div>
      </div>
    );
  }
}

/* MenuItem.jsx*/
class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: '1s appear forwards',
        animationDelay: this.props.delay,
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: '1.2rem',
        margin: '0 5%',
        cursor: 'pointer',
        color: 'black',
        // transition: 'color 0.2s ease-in-out',
        // animation: '0.5s slideIn forwards',
        // animationDelay:this.props.delay,
      },
      line: {
        width: '90%',
        height: '1px',
        background: 'gray',
        margin: '0 auto',
        // animation: '0.5s shrink forwards',
        // animationDelay:this.props.delay,
      },
    };
    return (
      <div style={styles.container}>
        <div
          style={styles.menuItem}
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
        >
          <div style={{ marginLeft: '150px', marginRight: '150px' }}>
            {this.props.children}
          </div>
        </div>
        <div style={styles.line} />
      </div>
    );
  }
}

/* Menu.jsx */
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: 'absolute',
        left: 0,
        height: this.state.open ? 'auto' : 0,
        width: '30vw',
        display: 'flex',
        flexDirection: 'column',
        background: '#f2f2f2',
        // opacity: 0.95,
        color: 'black',
        transition: 'height 0.3s ease',
        zIndex: 2,
        boxSizing: 'border-box',
        borderBottomRightRadius: '20px',
      },
      menuList: {
        paddingTop: '5px',
        // marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    };
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : 'black',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      container: {
        height: '32px',
        width: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '4px',
      },
      line: {
        height: '2px',
        width: '20px',
        background: this.state.color,
        transition: 'all 0.2s ease',
      },
      lineTop: {
        transform: this.state.open ? 'rotate(45deg)' : 'none',
        transformOrigin: 'top left',
        marginBottom: '5px',
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? 'translateX(-16px)' : 'none',
      },
      lineBottom: {
        transform: this.state.open ? 'translateX(-1px) rotate(-45deg)' : 'none',
        transformOrigin: 'top left',
        marginTop: '5px',
      },
    };
    return (
      <div
        style={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}

/* Footer.jsx */
function Footer(props) {
  const styles = {
    footer: {
      // position: 'absolute',
      bottom: 0,
      width: '100%',
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: props.color,
    },
    line: {
      height: '1px',
      width: '90%',
      background: props.color,
    },
    text: {
      padding: '0.5rem',
    },
  };

  const style = {
    verticalLine: {
      borderLeft: '1px solid #F96302',
    },
    container: {
      display: 'flex',
      flexWrap: 'no-wrap',
      justifyContent: 'space-evenly',
    },
    text: {
      fontFamily: 'Oswald',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '27px',
      textTransform: 'uppercase',
      color: '#535353',
      wordWrap: 'break-word',
    },
    childText: {
      fontFamily: 'Oswald',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '13px',
      lineHeight: '104.68%',
      textTransform: 'uppercase',
      color: '#535353',
    },
  };

  return (
    <div style={{ ...styles.footer, backgroundColor: '#F2F2F2' }}>
      <div style={styles.line}></div>

      <div style={styles.text}>
        HEATMANN GmbH All Rights Reserved &copy; 2013-2019
      </div>
    </div>
  );
}

Footer.defaultProps = {
  color: 'black',
  // title: 'hello world!'
};

Footer.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
};

export default App;
