import React from 'react';
import BurgerMenu from '../../../Components/NavigationMenu/BurgerMenu';

import axios from 'axios';

class Product extends React.Component {
  state = {
    productInfo: [],
    url: 'http://18.189.49.66:3000/'
  };

  //TODO axios get data for product
  componentDidMount() {
    let url =
      'http://18.189.49.66:3000/api/product/' + this.props.match.params.name;
    axios.get(url).then(result => {
      const product = result.data;
      this.setState({ productInfo: product.data });
    });
  }

  render() {
    const style = {
      smallImage: {
        width: '80px',
        padding: '10px'
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
        textAlign: 'center',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '36px',
        lineHeight: '118.2%',
        textTransform: 'uppercase',
        color: '#535353'
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
          {/* <h1>{this.state.productInfo[0].name}</h1> */}
          {this.state.productInfo.length > 0 ? (
            <div>
              <h1 style={style.title}>{this.state.productInfo[0].name}</h1>
              <img
                style={style.bigImage}
                alt={this.state.productInfo[0].name + 'image'}
                src={this.state.url + this.state.productInfo[0].path}
              ></img>
            </div>
          ) : (
            <span>loading...</span>
          )}
          {/* {console.log('TEST DATA ' + this.state.productInfo[0])} */}
          <div style={style.imageContainer}>
            {this.state.productInfo.map(info => {
              return (
                <img
                  style={style.smallImage}
                  alt={info.name}
                  key={info.picid}
                  src={this.state.url + info.path}
                ></img>
              );
            })}
          </div>

          <div>
            {this.state.productInfo.length > 0 ? (
              <div>
              <p style={style.title}>About</p>
              <p style={style.description}>{this.state.productInfo[0].description}</p>
              </div>
            ) : <span>Loading...</span>}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
