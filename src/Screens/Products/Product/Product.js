import React from 'react';
import BurgerMenu from '../../../Components/NavigationMenu/BurgerMenu';
import DetailInfo from './ProductDetailInfo/ProductDetailInfo';
import MainImage from '../../../Components/MainImage/MainImage';
import Calculator from '../../../Components/ProductCalculator/Calculator';
import Tabs from '../../../Components/ProductTabs/Tabs';
import SplitComponent from '../../../Components/UI/SplittedDiv';
import Gallery from '../../../Components/ImagesGallery/Gallery';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: [],
      calcHeight: [],
      calcWidth: [],
      url: 'http://18.189.49.66:3000/',
      keyToDetailedInfo: 'not Set',
      imageUrl: '',
      showTechnicalBlock: true,
      showCalculator: false,
      showDownload: false,
      hideNav: null,
      responsive: {
        1024: { items: 6 }
      },
      currentIndex: 0,
      productType: null,
      generatedCode: null,
      isThereAFan: false,
    };

    this.showTechnicalInfo = this.showTechnicalInfo.bind(this);
    this.showCalculator = this.showCalculator.bind(this);
    this.showDownloads = this.showDownloads.bind(this);
    this.resize = this.resize.bind(this);
    this.setTypeForCalculator = this.setTypeForCalculator.bind(this);
    this.codeGenerator = this.codeGenerator.bind(this);
  }

  //TODO axios get data for product
  componentDidMount() {
    //product info api call
    let url =
      'http://18.189.49.66:3000/api/product/' + this.props.match.params.name;
    axios.get(url).then(result => {
      const product = result.data;
      this.setState({
        productInfo: product.data,
        imageUrl: url + product.data[0].path
      });
    });
    this.setState({
      keyToDetailedInfo: this.props.match.params.name
    });

    //Calculator api call
    let calculatorHeightUrl =
      'http://18.189.49.66:3000/api/calculate_width/height/' +
      this.state.productType;
    let calculatorWidthUrl =
      'http://18.189.49.66:3000/api/calculate_width/widht/' +
      this.state.productType;
    console.log(calculatorWidthUrl);
    axios.get(calculatorHeightUrl).then(result => {
      const calculatorHeight = result.data;
      this.setState({
        calcHeight: calculatorHeight.result
      });
    });

    axios.get(calculatorWidthUrl).then(result => {
      const calculatorHeight = result.data;
      this.setState({
        calcWidth: calculatorHeight.result
      });
    });

    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  componentWillMount() {
    this.setTypeForCalculator(this.props.match.params.name);
  }

  setTypeForCalculator(type) {
    if (type === 'line') {
      this.setState({ productType: 'LN' });
    } else if (type === 'line_fan') {
      this.setState({ productType: 'LF', isThereAFan: true });
    } else if (type === 'line_air') {
      this.setState({ productType: 'LNA' });
    } else if (type === 'line_fan_pool') {
      this.setState({ productType: 'LFP', isThereAFan: true });
    } else if (type === 'line_fan_clima') {
      this.setState({ productType: 'LFC', isThereAFan: true });
    } else if (type === 'line_pool') {
      this.setState({ productType: 'LNP' });
    } else {
      return;
    }
  }

  resize() {
    let currentScreenSize = window.innerWidth <= 760;
    if (currentScreenSize !== this.state.hideNav) {
      this.setState({ hideNav: currentScreenSize });
    }
  }

  changeImageHandler = id => {
    let url = document.getElementById(id).src;
    this.setState({ imageUrl: url });
    document.getElementById('main-image').src = url;
  };

  showTechnicalInfo() {
    this.setState({
      showTechnicalBlock: !this.state.showTechnicalBlock,
      showCalculator: false,
      showDownload: false
    });
  }

  showCalculator() {
    this.setState({
      showCalculator: !this.state.showCalculator,
      showDownload: false,
      showTechnicalBlock: false
    });
  }

  showDownloads() {
    this.setState({
      showDownload: !this.state.showDownload,
      showCalculator: false,
      showTechnicalBlock: false
    });
  }

  codeGenerator(
    productType,
    height,
    width,
    length,
    T1,
    T2,
    Ti,
    paint,
    material,
    frame,
    connection
  ) {
    let code = height;

    //this.setState({ generatedCode: code });
    console.log('Generated code: ' + code);
  }

  render() {
    const desktopstyle = {
      bigImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '20px 20px 20px 0',
        justifyContent: 'space-between',
        alignCenter: 'center',
        width: 'fit-content',
        maxWidth: '700px'
      },
      smallImage: {
        width: '120px',
        padding: '20px 20px 20px 20px',
        marginRight: '20px',
        cursor: 'pointer',
        height: '80px',
        maxHeight: '200px',
        background: '#F7F7F7'
      }
    };

    const mobileStyle = {
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
        padding: '20px 20px 20px 0',
        justifyContent: 'space-between',
        alignCenter: 'center',
        maxWidth: '700px'
      },
      bigImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '20px 20px 20px 0',
        justifyContent: 'space-between',
        alignCenter: 'center',
        width: 'fit-content',
        maxWidth: '700px'
      },
      bigImage: {
        width: '90vw',
        // margin: '4%'
      },
      title: {
        textAlign: 'left',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '28px',
        lineHeight: '118.2%',
        textTransform: 'uppercase',
        color: '#535353',
        // margin: '4%'
      },
      title2: {
        textAlign: 'left',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '118.2%',
        textTransform: 'uppercase',
        color: '#535353',
        // margin: '4%'
      },
      description: {
        textAlign: 'left',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '118.2%',
        textTransform: 'uppercase',
        color: '#535353',
        // margin: '4%'
      }
    }

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
        padding: '20px 20px 20px 0',
        justifyContent: 'space-between',
        alignCenter: 'center',
        maxWidth: '700px'
      },
      bigImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '20px 20px 20px 0',
        justifyContent: 'space-between',
        alignCenter: 'center',
        width: 'fit-content',
        maxWidth: '700px'
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
        fontSize: '60px',
        lineHeight: '118.2%',
        textTransform: 'uppercase',
        color: '#535353',
        margin: '4%'
      },
      title2: {
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
        margin: '4%'
      }
    };
    return (
      <BurgerMenu logo="http://18.189.49.66:3000/images/logos_Headmann-big.png">
        <div style={this.state.hideNav ? null : null}>
          {this.state.productInfo.length > 0 ? (
            <div>
              <SplitComponent
                screen={this.state.hideNav}
                left={
                  <div>
                    <MainImage
                      screen={this.state.hideNav}
                      name={this.state.productInfo[0].name}
                      url={this.state.url + this.state.productInfo[0].path}
                    ></MainImage>
                    <div
                      style={
                        this.state.hideNav
                          ? style.imageContainer
                          : desktopstyle.bigImageContainer
                      }
                    >
                     
                        {this.state.productInfo.map(info => {
                          return (
                            <img
                              id={info.picid}
                              style={
                                this.state.hideNav
                                  ? style.smallImage
                                  : desktopstyle.smallImage
                              }
                              alt={info.name}
                              key={info.picid}
                              src={this.state.url + info.path}
                              onClick={() =>
                                this.changeImageHandler(info.picid)
                              }
                            ></img>
                          );
                        })}
                    </div>
                  </div>
                }
                right={
                  <div style={this.state.hideNav ? null : { margin: '0 20px' }}>
                    <h1 style={this.state.hideNav ? mobileStyle.title : style.title}>
                      {this.state.productInfo[0].name}
                    </h1>
                    <p style={this.state.hideNav ? mobileStyle.title2 : style.title2}>About</p>
                    <p style={this.state.hideNav ? mobileStyle.description : style.description}>
                      {this.state.productInfo[0].description}
                    </p>
                  </div>
                }
              ></SplitComponent>
            </div>
          ) : (
            <span>loading...</span>
          )}

          <Tabs
            downloadClicked={this.state.showDownload}
            detailInfoClicked={this.state.showTechnicalBlock}
            calculatorClicked={this.state.showCalculator}
            showDownloads={this.showDownloads}
            showTechnicalInfo={this.showTechnicalInfo}
            showCalculator={this.showCalculator}
            fullScreen={this.state.hideNav}
          ></Tabs>
          {this.state.showTechnicalBlock ? (
            <DetailInfo customKey={this.props.match.params.name}></DetailInfo>
          ) : null}

          {this.state.showCalculator ? (
            // <Calculator
            //   // codeGenerator={() => this.codeGenerator()}
            //   isThereAFan={this.state.isThereAFan}
            //   height={this.state.calcHeight}
            //   width={this.state.calcWidth}
            //   title="Calculator"
            //   type={this.state.productType}
            //   fullScreen={this.state.hideNav}
            // ></Calculator>
            null
          ) : null}
        </div>
      </BurgerMenu>
    );
  }
}

export default Product;
