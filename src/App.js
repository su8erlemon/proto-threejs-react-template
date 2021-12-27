import React, { Component } from 'react';
import Scene from './Scene';
import './App.scss';
import Logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Scene />
        <img alt='logo' src={Logo} />
      </div>
    );
  }
}

export default App;
