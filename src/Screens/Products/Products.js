import React from 'react';
import axios from 'axios';

import BurgerMenu from '../../Components/NavigationMenu/BurgerMenu';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class Products extends React.Component {
  state = {
    products: [],
    loading: true,
    path: 'http://18.189.49.66:3000',
    hideNav: null,
    styles: {
      h1: {
        marginTop: '50px'
      },
      containerMobile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '50px'
      },
      containerPc: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: '50px',
        // marginLeft: '150px',
        // marginRight: '150px'
      }
    }
  };

  componentDidMount() {
    //this.setState({ loading: true });
    axios.get(this.state.path + '/api/products').then(res => {
      const products = res.data;
      //if(products.result.default === '1'){
      this.setState({ products: products.result, loading: false });
      //}
      console.log(products.result.default);
    });

    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = window.innerWidth <= 760;
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideNav: currentHideNav });
    }
  }

  TrenchProductBlock = () => {
    return {
      ...(this.state.loading ? (
        <div
          style={
            this.state.hideNav
              ? this.state.styles.containerMobile
              : this.state.styles.containerPc
          }
        >
          <Loader
            style={{ margin: 'auto', padding: '10px' }}
            type="Rings"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={10000} //3 secs
          />
        </div>
      ) : (
        <div
          style={
            this.state.hideNav
              ? this.state.styles.containerMobile
              : this.state.styles.containerPc
          }
        >
          {this.state.products.map(result => {
            return result.default === 1 &&
              result.type === 'trench_convector' ? (
              <ProductCard
                link={result.key}
                mobileScreen={this.state.hideNav}
                name={result.name}
                url={this.state.path + '/' + result.path}
                description={result.description}
                key={result.picid}
              ></ProductCard>
            ) : null;
          })}
        </div>
      ))
    };
  };

  CubeProductBlock = () => {
    return (
      <div
        style={
          this.state.hideNav
            ? this.state.styles.containerMobile
            : this.state.styles.containerPc
        }
      >
        {this.state.products.map(result => {
          return result.default === 1 && result.type === 'wall_freestanding' ? (
            <ProductCard
              link={result.key}
              mobileScreen={this.state.hideNav}
              name={result.name}
              url={this.state.path + '/' + result.path}
              description={result.description}
              key={result.picid}
            ></ProductCard>
          ) : null;
        })}
      </div>
    );
  };

  render() {
    const styles = {
      h1: {
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '43px',
        lineHeight: '118.2%',
        textTransform: 'uppercase',
        color: '#535353',
        textAlign: 'center'
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
        <BurgerMenu logo={this.state.path + '/images/logos_Headmann-big.png'}>
          <header className="App-header"></header>
          <div>
            <h1 style={styles.h1}>Trench Convectors</h1>
            <this.TrenchProductBlock></this.TrenchProductBlock>
            <h1 style={styles.h1}>Wall and freestanding</h1>
            <this.CubeProductBlock></this.CubeProductBlock>
          </div>
        </BurgerMenu>
      </div>
    );
  }
}

export default Products;
