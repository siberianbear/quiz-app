// @flow
import React, { Component } from 'react';
import type { Output } from '../Types';

// Import component to be developed as required by specs document here
// import Comp from '../../components/Comp';
// import {TapButton} from '../../components/TapButton';
import {Choices} from '../../components/Choices';
import {quizzes} from '../../components/QuizList';
import {Timer} from '../../components/Timer';

//Import relevant components as required by specs document here
// import { Button } from 'aq-miniapp';

// Import CSS here
import '../css/View2.css';

/* Define constants here
ex.
const MY_CONSTANT = 42;
*/

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
      diceDrop: Math.floor(Math.random() * quizzes.length)
    }

    this.onSelected = this.onSelected.bind(this);

  }

  onSelected(selectedChoice){
    this.props.onClick({answerNum: this.state.diceDrop, selected: selectedChoice})
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
        <Timer start={60}/>

      </div>
    )
  }
}
