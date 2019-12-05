import React from 'react';
import axios from 'axios';

import BurgerMenu from '../../Components/NavigationMenu/BurgerMenu';
import ProductCard from '../../Components/ProductCard/ProductCard';

class Products extends React.Component {
  state = {
    products: [],
    path: 'http://18.189.49.66:3000',
    hideNav: null
  };

  componentDidMount() {
    axios.get(this.state.path + '/api/products').then(res => {
      const products = res.data;
      this.setState({ products: products.result });
      console.log(products);
    });

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = window.innerWidth <= 760;
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideNav: currentHideNav });
    }
  }

  render() {
    const styles = {
      h1: {
        marginTop: '50px'
      },
      containerMobile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '50px'
      },
      containerPc: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '50px'
      }
    };

    return (
      <div>
        <header className="App-header">
          <BurgerMenu
            logo={this.state.path + '/images/logos_Headmann-big.png'}
          ></BurgerMenu>
        </header>
        <div style={this.state.hideNav ? styles.containerMobile : styles.containerPc}>
          {this.state.products.map(result => {
            return (
              <ProductCard
                mobileScreen={this.state.hideNav}
                name={result.name}
                url={this.state.path + '/' + result.path}
                description={result.description}
              ></ProductCard>
            );
          })}
        </div>
        {/* <h1 style={styles.h1}>Product cards</h1> */}
      </div>
    );
  }
}

export default Products;
