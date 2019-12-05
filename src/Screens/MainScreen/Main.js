import React from 'react';
import BurgerMenu from '../../Components/NavigationMenu/BurgerMenu';

class Main extends React.Component {
  render() {
    const path = 'http://18.189.49.66:3000';

    const styles = {
      h1:{
        marginTop: '50px'
      }
    }

    return (
      <div>
        <header className="App-header">
          <BurgerMenu
            logo={path + '/images/logos_Headmann-big.png'}
          ></BurgerMenu>
        </header>
        <h1 style={styles.h1}>Main screen things</h1>
      </div>
    );
  }
}

export default Main;