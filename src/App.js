import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to "Bulls and cows" game</h2>
        </div>
        <p className="App-intro">
            {Form}
        </p>
          <p className="App-source">
              <a href="https://github.com/wirtaw/bulls_and_cows">Github</a> or <a href="https://bitbucket.org/wirtaw/react_bulls_and_cows">Bitbucket</a>
          </p>
      </div>
    );
  }
}

export default App;
