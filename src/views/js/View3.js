import React, { Component } from 'react';
import type { Output } from '../Types';

//Import relevant components as required by specs document here
import { Button } from 'aq-miniapp';
import { quizzes } from '../../components/QuizList';

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

  constructor(props: Props){
    super(props);

    this.state = {
      result: "",
      color: ""
    }
    this.won = false;
    this.currAnswer = quizzes[props.output.problemNo];
    this.setResult = this.setResult.bind(this);

  }

  componentDidMount(){
    this.setResult();
    console.log(this.currAnswer.img + " ze image");
    // console.log(props.output);
    // console.log(this.props.problemNo);
    // console.log(quizzes[1].answer);
    // console.log(quizzes[props.output.problemNo].answer);
  }

  setResult(){
    let answer = this.currAnswer.choices[this.currAnswer.answer];
    console.log(this.currAnswer.answer, this.currAnswer.choices);
    console.log(answer, "====", this.props.output.selected)
    if (answer === this.props.output.selected) {
      this.won = true;
      this.setState({result: "You did it!", color: "green"})
    } else {
      this.setState({result: "You lose", color: "red"})
    }
  }

  render() {
    return (
      <div className="viewContainer justifyCenter">
        {/* <div className="titleResultCorrect">You did it!</div> */}
        <div className="result" style={{color: this.state.color}}>{this.state.result}</div>
        <div className="quizImg">
          <img src={this.currAnswer.img} alt="quiz_picture" />
        </div>
        {/* <div className="title">Done</div> */}
        <Button title="Restart" onClick={this.props.onClick} className="quizBttn"/>
      </div>
    )
  }
}
