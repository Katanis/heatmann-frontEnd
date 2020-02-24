import React from 'react';
import './Tabs.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      buttonClicked: true,
      buttonClicked1: false,
      buttonClicked2: false
    };
  }
  // state ={
  //   buttonClicked: false
  // }

  //TODO NOT WORKING PROPERLY RECURSION PROBLEM IN ONCLICK
  render() {
    let fontSizeOfTabTitle= '24px';
    this.props.fullScreen ? fontSizeOfTabTitle = '12px' : fontSizeOfTabTitle = '24px'
    
    const style = {
      button: {
        padding: '10px 54px 10px 0',
        margin: '0',
        // backgroundColor: 'rgb(242, 242, 242)',
        fontSize: fontSizeOfTabTitle,
        fontFamily: 'Oswald',
        backgroundColor: 'white',
        color: '#535353',
        borderBottom: '0.5px solid #535353',
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        cursor: 'pointer',
        textTransform: 'uppercase'
      },
      buttonClicked: {
        padding: '10px 54px 10px 0',
        margin: '0',
        // backgroundColor: 'rgb(242, 242, 242)',
        fontSize: fontSizeOfTabTitle,
        fontFamily: 'Oswald',
        backgroundColor: 'white',
        color: '#F96302',
        borderBottom: '1.6px solid #F96302',
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        cursor: 'pointer',
        textTransform: 'uppercase'
      }
    };
    return (
      <div>
        {/* {this.props.fullScreen ? fontSizeOfTabTitle = '24px' : fontSizeOfTabTitle = '12px'} */}
        <button
          className="tabs"
          style={this.props.detailInfoClicked ? style.buttonClicked : style.button}
          onClick={this.props.showTechnicalInfo}
        >
          Detail Information
        </button>
        <button
          className="tabs"
          style={this.props.calculatorClicked ? style.buttonClicked : style.button}
          onClick={this.props.showCalculator}
        >
          Calculator
        </button>
        <button
          className="tabs"
          style={this.props.downloadClicked ? style.buttonClicked : style.button}
          onClick={this.props.showDownloads}
        >
          Downloads
        </button>
      </div>
    );
  }
}

export default Tabs;
