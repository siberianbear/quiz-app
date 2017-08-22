import React, { Component } from 'react';
import type { Output } from '../Types';

//Import relevant components as required by specs document here
import { Button } from 'aq-miniapp';
import { quizzes } from '../../components/QuizList';

import soundWin from '../../assets/sounds/win.mp3';
import soundLose from '../../assets/sounds/lose.mp3';

/* Import Assets as required by specs document
ex.
import asset from '../../assets/asset.png';
*/

// Import CSS here
import '../css/View3.css';


type Props = {
  output: Output
}

export class View3 extends Component {
  props: Props;

  won = false;
  currAnswer = null;
  userChoice = null;

  constructor(props: Props){
    super(props);

    this.state = {
      result: "",
      statusCSS: "",
    }
    this.won = false;
    this.userChoice = null;
    this.currAnswer = quizzes[props.output.theQuiz];
    this.setResult = this.setResult.bind(this);

    this.onPlay = this.onPlay.bind(this);
    this.soundWin = new Audio(soundWin);
    this.soundLose = new Audio(soundLose);
  }

  componentDidMount(){
    this.setResult();
    // console.log(this.currAnswer.img);
    // console.log(this.userChoice);
  }

  componentWillUnmount(){
    this.onPlay();
  }

  onPlay(arg){
    if (arg === "win") {
      this.soundWin.play();
    }
    else if (arg === "lose") {
      this.soundLose.play();
    }
    else {
      this.soundWin.pause();
      this.soundLose.pause();
    }
  }

  setResult(){
    let answer = this.currAnswer.choices[this.currAnswer.answer];
    // console.log(this.currAnswer.answer, this.currAnswer.choices);
    console.log(answer, "====", this.props.output.selected + " ?");
    this.userChoice = this.props.output.selected;
    if (answer === this.props.output.selected) {
      this.won = true;
      this.setState({result: "You did it!", statusCSS: "titleResultCorrect"});
      this.onPlay("win");
    } else {
      this.setState({result: "You lose", statusCSS: "titleResultIncorrect"});
      this.onPlay("lose");
    }
  }

  render() {
    return (
      <div className="viewContainer justifyCenter">
        {/* <div className="result" style={{color: this.state.color}}>{this.state.result}</div> */}
        <div className={this.state.statusCSS}>{this.state.result}</div>

        <div className="resultChoice">{this.userChoice}</div>

        <div className="quizImg">
          <img src={this.currAnswer.img} alt="quiz_picture" />
        </div>

        <Button title="Next" onClick={this.props.onClick} className="quizBttn"/>
        <p id="resultInstruction">TAP NEXT BUTTON</p>
      </div>
    )
  }
}
