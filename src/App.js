// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import questionaire from './questionaire';
import Sound from 'react-sound';
import type {Response} from './questionaire';

function AnswerList ({answers, onAnswerChosen}: {answers: Array<Response>, onAnswerChosen: (nextQuestion: string)=>void}) {
  const listItems = answers.map((answer) =>
    <li onClick={() => onAnswerChosen(answer.nextQuestion)}>{answer.text}</li>
  );
  return (
    <ul className="Answer-list">
      {listItems}
    </ul>
  )
}

class Question extends Component {
  state = {
    question: 'a',
    soundStatus: Sound.status.PLAYING
  };

  handleAnswerChosen = (question) => {
    this.setState({question});
  }

  handleSongLoading = () => {

  }

  handleSongPlaying = () => {

  }

  handleSongFinishedPlaying = () => {
  }

  render() {
    const question = questionaire[this.state.question]
    const soundFile = `${process.env.PUBLIC_URL}/sounds/${question.sound}`
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{question.text}</h1>
        </header>
        <p className="App-intro">
          <Sound
             url={soundFile}
             playStatus={this.state.soundStatus}
             playFromPosition={1}
             volume={100}
             onLoading={this.handleSongLoading}
             onPlaying={this.handleSongPlaying}
             onFinishedPlaying={this.handleSongFinishedPlaying}
           />
           <AnswerList answers={question.responses} onAnswerChosen={this.handleAnswerChosen}/>
        </p>

      </div>
    );
  }
}

class App extends Component {
  render() {
    return <Question/>
  }
}

export default App;
