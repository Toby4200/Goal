import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            Добро пожаловать в Goal!
          </h2>
          <div>
              <Button variant="contained" color="primary" className="main__button main__button_red">
                Sign up
              </Button>

              <Button variant="contained" color="secondary" className="main__button main__button_blue">
                Sign in
              </Button>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
