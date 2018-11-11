import React, { Component } from 'react';

// material-ui
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Input from '@material-ui/core/Input';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // debugger;
    this.state = {
      isRegPopupVisible: false
    }
  }

  toggleRegPopup = () => {
    this.setState({
      isRegPopupVisible: !this.state.isRegPopupVisible
    });
  };

  render() {
    return (
      <div className="App App_zone_danger">
        <header className="App-header">
          <h2>
            Добро пожаловать в Goal!
          </h2>
          <div>
              <Button
                variant="contained"
                color="primary"
                className="main__button main__button_red"
                onClick={ this.toggleRegPopup }
              >
                Sign up
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className="main__button main__button_blue"
              >
                Sign in
              </Button>
          </div>

          <Modal
            open={ this.state.isRegPopupVisible }
            onEscapeKeyDown={ this.toggleRegPopup }
          >
            <div className='modal'>
              <div className="modal__container">
                <div className="modal__header">
                  В жизни нет иного смысла, кроме того, какой человек сам придает ей,
                  раскрывая свои силы, живя плодотворно.
                </div>

                <div className="modal__body">

                  <form action="/registration">
                    <h2>Регистрироваться тут</h2>

                    <span>E-mail</span>
                    <input type="text"/>

                    <span>Password</span>
                    <input type="text"/>

                    <span>Password</span>
                    <input type="text"/>

                    <button type='submit'>Зарегистрируй меня</button>
                  </form>
                </div> 
              </div>
            </div>
          </Modal>
        </header>
      </div>
    );
  }
}

export default App;
