// @flow
import React, { Component } from 'react';
import type { Output } from '../Types';

// Import component to be developed as required by specs document here
import {Choices} from '../../components/Choices';
import {quizzes} from '../../components/QuizList';
import {Timer} from '../../components/Timer';
// import soundClockTick from '../../assets/sounds/clock_tick.mp3';

//Import relevant components as required by specs document here
// import { Button } from 'aq-miniapp';

// Import CSS here
import '../css/View2.css';

const setTime = 5; // time for timer in seconds

export type Props = {
  onClick: (Output) => void
};

export class View2 extends Component {

  state: {
    output: Output
  };

  constructor(props: Props){
    super(props);

    this.state = {
      output: {},
      diceDrop: Math.floor(Math.random() * quizzes.length),
      timeOut: false
    }

    this.onSelected = this.onSelected.bind(this);
  }

  onChildChanged(newState) {
    // console.log("timeout happens");
    // this.setState({timeOut: true});
    this.props.onClick({theQuiz: this.state.diceDrop, selected: null})
  }

  onSelected(selectedChoice){
    this.props.onClick({theQuiz: this.state.diceDrop, selected: selectedChoice})
  }

  render() {
    return (
      <div className="viewContainer justifySpaceAround">
        {/* TODO: insert additional assets here as required be the specs document */}
        <div className="titleGuess">Guess how many?</div>
        <div className="quizImg">
          <img src={quizzes[this.state.diceDrop].img} alt="quiz_picture" />
        </div>
        <div className="choiceContainer">
          <Choices choice={quizzes[this.state.diceDrop]} onSelected={this.onSelected} />
        </div>
        <Timer start={setTime} callbackParent={(newState) => this.onChildChanged(newState) }/>
      </div>
    )
  }
}
