import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ElizaBot from 'elizabot';

import meSpeak from 'mespeak';
meSpeak.loadConfig(require('mespeak/src/mespeak_config.json'));
meSpeak.loadVoice(require('mespeak/voices/en/en-us.json'));

var eliza = new ElizaBot();

class App extends Component {


  constructor(props) {
    super(props);
    const question = eliza.getInitial();
    this.state = {question, answer: ""};
    console.log(meSpeak.isConfigLoaded(), meSpeak.isVoiceLoaded());
  }

  handleChange = (event) => {
    this.setState({answer: event.target.value});
  }

  handleSubmit = (event) => {
    let question = eliza.transform(this.state.answer);
    meSpeak.speak(question);
    this.setState(
      {
        question,
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
