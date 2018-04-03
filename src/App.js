import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ElizaBot from './elizabot';

import meSpeak from 'mespeak';
meSpeak.loadConfig(require('mespeak/src/mespeak_config.json'));
meSpeak.loadVoice(require('mespeak/voices/en/en-us.json'));

var eliza = new ElizaBot();

class Say extends Component {

  state = {
    spokenOnce: false
  }

  stoppedTalking = () => {
    this.setState({spokenOnce: true});
    this.props.onTalking(false);
  }

  startedTalking = () => {
    this.props.onTalking(true);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.question !== nextProps.question) {
      this.setState({spokenOnce: false});
    }
  }
  
  render() {
    if (!this.props.talking && !this.state.spokenOnce) { 
      meSpeak.speak(this.props.question, {
        wordgap: 2.7, 
        pitch: 25,
        speed: 142,
      }, this.stoppedTalking);
      this.startedTalking();
    }
    const classes = this.props.talking ? "App Glowing" : "App";
    return <p className={classes}>{this.props.question}</p>;
  }

  componentWillUnmount() {
    if (this.props.talking) {
      meSpeak.stop();
    }
  }
}

class App extends Component {


  constructor(props) {
    super(props);
    const question = eliza.getInitial();
    this.state = {question, answer: ""};
  }

  talking = (talking) => {
    this.setState({talking});
  }

  handleChange = (event) => {
    this.setState({answer: event.target.value});
  }

  handleSubmit = (event) => {
    let question = eliza.transform(this.state.answer);
    this.setState(
      {
        question,
        answer: ""
      }
    );
    event.preventDefault();
  }

  componentWillUnmount() {
    eliza.getFinal();
  }

  render() {
    const {question, answer, talking} = this.state;

    const classes = talking? "App-header Glowing" : "App-header";

    return (
      <div className="App">
        <header className={classes}>
          <h1 className="App-title">SOMEONE TO TALK TO</h1>
        </header>
        <Say question={question} talking={talking} onTalking={this.talking}/>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input value={answer} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default App;
