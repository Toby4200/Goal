import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={
        {
          background: 'url("./img/correct-bg.jpeg")'
        }
      }>
        <header className="App-header">
          <p>
            Добро пожаловать в Goal!
          </p>
          <div>
              <Button color="" className="main__button_red">
                Sign up
              </Button>

              <Button color="secondary" className="main__button_blue">
                Sign in
              </Button>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
