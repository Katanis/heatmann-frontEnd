import React, {Suspense} from 'react';
import './Main.css';
import './Transitions.css';
import { useTranslation } from 'react-i18next';
import BurgerMenu from '../../Components/NavigationMenu/BurgerMenu';
import Banner from '../../Components/Banner/Banner';
import MainScreenCard from '../../Components/MainScreenCard/Card';
import Transition from '../../Components/HomePageTransition/Transition';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: true,
      screenLarge: null,
      firstTransitionVisible: true
    };
  }

  tick() {
    this.setState(prevState => ({
      seconds: !this.state.seconds,
      firstTransitionVisible: false
    }));
  }

  resize() {
    let currentScreenSize = window.innerWidth <= 1200;
    if (currentScreenSize !== this.state.screenLarge) {
      this.setState({ screenLarge: currentScreenSize });
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 6000);

    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const path = 'http://18.189.49.66:3000';

    const styles = {
      h1: {
        marginTop: '50px'
      },
      projectDisplayDesktop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 30px 5px',
        borderBottomLeftRadius: '30px',
        borderTopLeftRadius: '30px',
        margin: '30px 0'
      },
      projectMobileDisplay: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 30px 5px',
        borderBottomLeftRadius: '30px',
        borderTopLeftRadius: '30px',
        margin: '30px 0'
      }
    };

    return (
      <BurgerMenu
        fullScreen={true}
        logo={path + '/images/logos_Headmann-big.png'}
      >
        {/* <Transition
          firstTransitionVisible={this.state.firstTransitionVisible}
          styles={
            this.state.firstTransitionVisible ? { opacity: 1 } : { opacity: 0 }
          }
        ></Transition> */}
        <MainScreenCard
          screenLarge={this.state.screenLarge}
          seconds={this.state.seconds}
          title="Controll your climate with us"
          url1="http://18.189.49.66:3000/images/projects/child/magnum-1.jpg"
          url2="http://18.189.49.66:3000/images/projects/child/park-town-2-3.jpg"
          linkTo1="/projects"
          linkTo2="/projects"
          name1="Magnum"
          name2="Park Town 2"
        ></MainScreenCard>

        <MainScreenCard
          screenLarge={this.state.screenLarge}
          seconds={this.state.seconds}
          title="Our New Products"
          url1="http://18.189.49.66:3000/images/products/line_fan_clima/R2.png"
          url2="http://18.189.49.66:3000/images/products/Cube/cube1.png"
          linkTo1="/product/line_fan_clima"
          linkTo2="/product/cube"
          name1="Line fan clima"
          name2="Cube"
        ></MainScreenCard>
      </BurgerMenu>
    );
  }
}

export default Main;
