import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ElizaBot from 'elizabot';
import Speak from 'mespeak';

var eliza = new ElizaBot();

class App extends Component {


  constructor(props) {
    super(props);
    const question = eliza.getInitial();
    this.state = {question, answer: ""};
  }

  handleChange = (event) => {
    this.setState({answer: event.target.value});
  }

  handleSubmit = (event) => {
    this.setState(
      {
        question: eliza.transform(this.state.answer),
        answer: ""
      }
    );
    //Speak.speak(question);
    event.preventDefault();
  }

  render() {
    const {question, answer} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Eliza</h1>
        </header>
        <p>
          {question}
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Answer:
            <input value={answer} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default App;
