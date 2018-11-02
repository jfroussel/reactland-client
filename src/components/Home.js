import React, { Component } from 'react';
import './App.css';
import Signin from './Signin'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="font-weight-light pb-5">Welcome to reactsound-composers</h1>
         <div>
            <Signin />
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
