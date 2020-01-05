import React from 'react';
import BurgerMenu from '../../../Components/NavigationMenu/BurgerMenu';
import DetailInfo from './ProductDetailInfo/ProductDetailInfo';
import MainImage from '../../../Components/MainImage/MainImage';

import axios from 'axios';

class Product extends React.Component {
  state = {
    productInfo: [],
    url: 'http://18.189.49.66:3000/',
    keyToDetailedInfo: 'not Set',
    imageUrl: ''
  };

  //TODO axios get data for product
  componentDidMount() {
    let url =
      'http://18.189.49.66:3000/api/product/' + this.props.match.params.name;
    axios.get(url).then(result => {
      const product = result.data;
      this.setState({
        productInfo: product.data,
        imageUrl: url + product.data[0].path
      });
      console.log('Image URL ' + this.state.imageUrl);
    });
    this.setState({
      keyToDetailedInfo: this.props.match.params.name
    });
  }

  changeImageHandler = id => {
    let url = document.getElementById(id).src;
    this.setState({ imageUrl: url });
    document.getElementById('main-image').src = url;
  };

  render() {
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
        <header className="App-header">
          <BurgerMenu logo="http://18.189.49.66:3000/images/logos_Headmann-big.png"></BurgerMenu>
        </header>
        <div>
          {this.state.productInfo.length > 0 ? (
            <MainImage
              name={this.state.productInfo[0].name}
              url={this.state.url + this.state.productInfo[0].path}
            ></MainImage>
          ) : (
            <span>loading...</span>
          )}
          <div style={style.imageContainer}>
            {this.state.productInfo.map(info => {
              return (
                <img
                  id={info.picid}
                  style={style.smallImage}
                  alt={info.name}
                  key={info.picid}
                  src={this.state.url + info.path}
                  onClick={() => this.changeImageHandler(info.picid)}
                ></img>
              );
            })}
          </div>

          <div>
            {this.state.productInfo.length > 0 ? (
              <div>
                <p style={style.title}>About</p>
                <p style={style.description}>
                  {this.state.productInfo[0].description}
                </p>
              </div>
            ) : (
              <span>Loading...</span>
            )}
          </div>

          <DetailInfo customKey={this.props.match.params.name}></DetailInfo>
        </div>
      </div>
    );
  }
}

export default Product;
