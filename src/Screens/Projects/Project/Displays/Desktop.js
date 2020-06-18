import React, { Suspense } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Desktop.css';
import { useTranslation } from 'react-i18next';

class Desktop extends React.Component {
  state = {
    path: null,
    name: null,
    imageStyle: {
      display: 'none',
    },
    url: this.props.url,
    showText1: false,
    showText2: false,
  };

  handleImageClick(path, name) {
    this.setState({
      path: path,
      name: name,
      imageStyle: {
        display: 'block',
        position: 'absolute',
        zIndex: '9',
        width: '-webkit-fill-available',
        height: 'auto',
        maxWidth: '80%',
        maxHeight: '80%',
      },
    });
  }

  changeMainImageHandler(url) {
    this.setState({ url: url });
  }

  closeImageClicked() {
    this.setState({ imageStyle: { display: 'none' } });
  }

  showFullText1() {
    this.setState({ showText1: !this.state.showText1 });
  }

  showFullText2() {
    this.setState({ showText2: !this.state.showText2 });
  }

  render() {
    let substringText = this.props.text;
    substringText.length > 200
      ? (substringText = substringText.substring(0, 200))
      : (substringText = substringText);

    let substringText2 = this.props.text2;
    substringText2.length > 200
      ? (substringText2 = substringText2.substring(0, 200))
      : (substringText2 = substringText2);

    const style = {
      mainImage: {
        position: 'relative',
        textAlign: 'center',
        backgroundSize: 'cover',
        paddingTop: '40%',
        height: '0',
        // minHeight: '60vh',
        // maxHeight: '450px',
        border: '1px #FFFFFF',
        minWidth: '60%',
        width: '-webkit-fill-available',
        backgroundRepeat: 'round',
        boxShadow: 'rgba(0, 0, 0, 0.1) 7px 10px 10px 3px',

        // borderRadius: '5px'
      },
      textBottom: {
        position: 'absolute',
        bottom: '0',
        left: '10px',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '36px',
        textTransform: 'uppercase',
        color: '#FFFFFF',
      },
      headding: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '26px',
        lineHeight: '16px',
        paddingLeft: '10px',
        color: '#535353',
      },
      text: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '20px',
        paddingLeft: '10px',
        color: '#535353',
      },
      container: {
        display: 'flex',
        flexWrap: 'no-wrap',
      },
      textContainer: {
        // width: '40%'
      },
    };

    function MyComponent() {
      const { t, i18n } = useTranslation();
      return (
        <span style={{ fontSize: 'bold', fontWeight: 'bold' }}>
          {t('data.project.title')}
        </span>
      );
    }
    

    return (
      <div style={style.container}>
        <div
          style={{
            ...style.mainImage,
            backgroundImage:
              'linear-gradient(to top, #535353 0%, rgba(83, 83, 83, 0.04) 54.48%), url(' +
              this.state.url +
              ')',
          }}
        >
          <h1 style={style.textBottom}>{this.props.description}</h1>
        </div>

        <div>
          <p style={style.headding}>{this.props.address}</p>
          <p style={style.text}>
            {this.state.showText1 ? this.props.text : substringText}
            <span
              onClick={() => this.showFullText1()}
              style={{ color: 'rgb(249, 99, 2)', cursor: 'pointer' }}
            >
              {this.state.showText1 ? 'read less!' : '... read more!'}
            </span>{' '}
          </p>
          <p style={style.text}>
            <span style={{ fontSize: 'bold', fontWeight: 'bold' }}>
              <Suspense fallback="loading">
                <MyComponent />
              </Suspense>
            </span>{' '}
            {this.props.products}
          </p>
          <p style={style.text}>
            {this.state.showText2 ? this.props.text2 : substringText2}
            <span
              onClick={() => this.showFullText2()}
              style={{ color: 'rgb(249, 99, 2)', cursor: 'pointer' }}
            >
              {this.state.showText2 ? 'read less!' : '... read more!'}
            </span>{' '}
          </p>

          <div
            style={{
              width: '100%',
              maxHeight: '300px',
              display: 'flex',
              justifyContent: 'space-between',
              right: '100px',
              position: 'relative',
            }}
          >
            {this.props.projectImages.map((result) => {
              return (
                <img
                  className="projectImages"
                  onClick={() =>
                    this.changeMainImageHandler(
                      'http://18.189.49.66:3000/images/projects/child/' +
                        result.path
                    )
                  }
                  alt={result.name}
                  src={
                    'http://18.189.49.66:3000/images/projects/child/' +
                    result.path
                  }
                ></img>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Desktop;
