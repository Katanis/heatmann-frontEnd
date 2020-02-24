import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  state = {
    style: {
      verticalLine: {
        border: '1px solid #F96302',
        transform: 'rotate(-90deg)'
      }
    }
  };
  FooterHeading(props) {
    return (
      <div style={props.stylingContainer}>
        <h1 style={props.textStyle}>{props.text}</h1>
        <div style={props.styling}>
          <p style={props.sty}>{props.text1}</p>
          <p style={props.sty}>{props.text2}</p>
          <p style={props.sty}>{props.text3}</p>
          <p style={props.sty}>{props.text4}</p>
        </div>
      </div>
    );
  }

  //   HEATMANN GMBH
  // +49 176-60020733
  // +49 176-60020733
  // info@heatmann.de
  // Wallensteinstr. 29, 80807, München, Germany

  render() {
    const style = {
      verticalLine: {
        borderLeft: '1px solid #F96302'
      },
      container: {
        display: 'flex',
        flexWrap: 'no-wrap',
        justifyContent: 'space-evenly',
        padding: '10px'
      },
      text: {
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '27px',
        textTransform: 'uppercase',
        color: '#535353'
      },
      childText: {
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '104.68%',
        textTransform: 'uppercase',
        color: '#535353',
        paddingLeft: '5px'
      },
      link: {
        textDecoration: 'none',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        textAlign: 'justify',
        color: '#535353',
        marginTop: '5px',
        borderBottom: '0.25px solid #E1E1E1;'
      }
    };

    return (
      <div
        style={{
          width: '100%',
          backgroundColor: '#F2F2F2',
          height: 'auto',
          
        }}
      >
        <div
          style={{
            ...style.container,

            width: '100%',

            backgroundColor: '#F2F2F2',
            height: 'auto'
            // marginTop: '50px'
          }}
        >
          <this.FooterHeading
            sty={style.childText}
            textStyle={style.text}
            stylingContainer={style.container}
            styling={style.verticalLine}
            text="Links"
            text1={
              <Link style={style.link} to="/products">
                Products
              </Link>
            }
            text2={
              <Link style={style.link} to="/projects">
                Projects
              </Link>
            }
            text3={
              <Link style={style.link} to="/about">
                About us
              </Link>
            }
          ></this.FooterHeading>
          <this.FooterHeading
            sty={style.childText}
            textStyle={style.text}
            stylingContainer={style.container}
            styling={style.verticalLine}
            text="Address"
            text1="HEATMANN GMBH"
            text2="+49 176-60020733"
            text3="info@heatmann.de"
            text4="Wallensteinstr. 29, 80807, München, Germany"
          ></this.FooterHeading>
        </div>
        <p style={{...style.childText, textAlign: 'center'}}>© 2013-2020 HEATMANN GmbH All Rights Reserved.</p>
      </div>
    );
  }
}

export default Footer;
