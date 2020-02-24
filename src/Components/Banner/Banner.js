import React from 'react';
import AliceCarousel from 'react-alice-carousel';

//import 'react-alice-carousel/lib/alice-carousel.css';
// import './Banner.css';

class Banner extends React.Component {
  render() {
    const style = {
      container: {
        marginTop: '10%',
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        // boxShadow: 'rgba(0, 0, 0, 0.1) -40px -40px 1px 15px',
      },
      image: {
        maxWidth: '70%',
        maxHeight: '400px'
      }
    };
    return (
      <div id="Banner" style={style.container}>
        <h2>{this.props.title}</h2>
        <h3>{this.props.name}</h3>
        <AliceCarousel>
          <img
            className="bottom"
            style={style.image}
            src={this.props.url1}
            alt={this.props.name}
          ></img>
          <img
            className="top"
            style={style.image}
            src={this.props.url2}
            alt={this.props.name}
          ></img>
          <img
            className="top"
            style={style.image}
            src={this.props.url3}
            alt={this.props.name}
          ></img>
        </AliceCarousel>

        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Banner;
