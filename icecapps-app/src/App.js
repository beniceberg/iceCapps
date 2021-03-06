import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import iceCapp from './assets/iceCapp-logo.png';
import './App.css';

import Landing from './container/LandingView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navBar">
          <div className="iceCapp">
            <img className="iceCappLogo" src={iceCapp} alt="IceCapps Logo" id="app-header-logo" />
          </div>
          <div className="title">
            <h1><a href='/'>IceCapps</a></h1>
          </div>
          <ul className="info">
            <li className="nav-item"><a href='/company'>Company</a></li>
            <li className="nav-item"><a href='/services'>Services</a></li>
            <li className="nav-item"><a href='/technologies'>Technologies</a></li>
            <li className="nav-item"><a href='/portfolio'>Portfolio</a></li>
          </ul>
          {/* <div className='auth-button-container'>
            <p className='auth-button'><a href='/login'>Login</a></p>
            <p className='auth-button'><a href='/sign-up'>Sign Up</a></p>
          </div> */}
        </div>
        <Router>
          <Switch >
            <Route
              exact={true} path='/'
              component={Landing}
            />
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
