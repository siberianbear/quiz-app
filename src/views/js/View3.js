import React, { Component } from 'react';
import type { Output } from '../Types';

//Import relevant components as required by specs document here
import { Button } from 'aq-miniapp';

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

  render() {
    return (
      <div className="viewContainer justifyCenter">
        <div className="title">Done</div>
        <Button title="Restart" onClick={this.props.onClick}/>
      </div>
    )
  }
}
