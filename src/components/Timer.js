// @flow
import React from 'react';

import './Timer.css';

// need to support it for React 16
var createReactClass = require('create-react-class');

export var Timer = createReactClass({

    getInitialState: function(){
        return { elapsed: 60000 };
    },

    componentDidMount: function(){
        this.timer = setInterval(this.tick, 10); // 100
    },

    componentWillUnmount: function(){
        clearInterval(this.timer);
    },

    tick: function(){
        var count = this.state.elapsed-10; // 100
        if (count <= 0) {
          clearInterval(this.timer);
          console.log("timer finished!");
        }
        else {
          this.setState({elapsed: count});
        }
    },

    render: function() {
        var elapsed = Math.round(this.state.elapsed / 10);
        var seconds = (elapsed / 100).toFixed(2);

        return (
          <div className="theTimer">
           Time left: <span className="timer-dynamic-text">{seconds}</span>
          </div>
        );
    }
});
