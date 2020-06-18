import React from 'react';
import { BrowserRouter, Route, Switch, generatePath } from 'react-router-dom';
import Main from './Screens/MainScreen/Main';
import Products from './Screens/Products/Products';
import About from './Screens/About/About';
import Projects from './Screens/Projects/Projects';
import Product from './Screens/Products/Product/Product';
import Project from './Screens/Projects/Project/Project';
import Footer from './Components/Footer/Footer';
import Admin from './Screens/Admin/Admin';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './context/auth';
import './App.css';

function App() {
  const style = {
    container: {
      overflow: 'hidden',
    },
  };

  return (
    <div className="App" style={style.container}>
      <div style={{ height: '100%' }}>
        {/* <BurgerMenu></BurgerMenu> */}
        <AuthContext.Provider value={false}>
          <BrowserRouter>
            <Switch>
              <PrivateRoute path="/admin" component={Admin}></PrivateRoute>
              <Route path="/about" component={About}></Route>
              <Route path="/products" component={Products}></Route>
              <Route path="/projects" component={Projects}></Route>
              <Route path="/product/:name" component={Product}></Route>
              <Route path="/project/:name" component={Project}></Route>
              <Route exact path="/" component={Main}></Route>
            </Switch>
          </BrowserRouter>
        </AuthContext.Provider>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
