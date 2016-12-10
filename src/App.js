import React, { Component } from 'react';
import './App.css';
import FormName from './FormName';

class App extends Component {
  render() {
    return (
      <div className="App">
            <div className="App-header">

                <h2 id="title-nav">Welcome to "Bulls and cows" game!</h2>
            </div>
            <div className="App-intro">
                <FormName />
            </div>
            <div className="App-source">
                <a href="https://github.com/wirtaw/bulls_and_cows">Github</a> or <a href="https://bitbucket.org/wirtaw/react_bulls_and_cows">Bitbucket</a>
            </div>
      </div>
    );
  }
}

export default App;
