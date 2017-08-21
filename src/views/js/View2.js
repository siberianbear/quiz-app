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
import { Button } from 'aq-miniapp';

/* Import Assets as required by specs document
ex.
import asset from '../../assets/asset.png';
*/

// Import CSS here
import '../css/View2.css';

// var imgarray = [1,2,3];
/* Define constants here

ex.
const MY_CONSTANT = 42;
*/

export type Props = {
  onClick: (Output) => void
};

export class View2 extends Component {


  // const imgarray = ["../../assets/circle.png", "../../assets/square.png", "../../assets/rectangle.png", "../../assets/triangle.png", "../../assets/triangle2.png"];

  // Math.floor(Math.random()*imgArray.lenght)

  // console.log(imgArray[2]);


  // item: any;

  state: {
    output: Output
  };

  constructor(props: Props){
    super(props);

    this.state = {
      output: {},
      diceDrop: Math.floor(Math.random() * quizzes.length)
    }

// this.setState({currentStep : 1});
    // this.showText = this.showText.bind(this);
    // this.mouseUp = this.mouseUp.bind(this);
    this.onSelected = this.onSelected.bind(this);
    // this.gotoStep2 = this.gotoStep2.bind(this);

    // console.log(quizzes.length);
  }

  onSelected(selectedChoice){
    console.log(selectedChoice + " zz");
    this.props.onClick({problemNo: this.state.diceDrop, selected: selectedChoice})
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
        {/* <Button title="Done" onClick={() => this.props.onClick(this.state.output)} className="quizBttn"/> */}
        <Button title="Done" onClick={this.props.onClick} className="quizBttn"/>
      </div>
    )
  }
}
