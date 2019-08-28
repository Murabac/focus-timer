import React, {Component} from 'react';
import moment from 'moment'
import {Header} from '../header/header.component'
import Clock from '../clock/clock.component'
import {SetTimer} from '../setTimer/setTimer.component'

import './layout.styles.css'

class Timer extends Component {
    constructor() {
      super();
  
      this.state = {
        currentTime: moment.duration(25, 'minutes'),
        baseTime: moment.duration(25, 'minutes'),
      };
  
    }
  
    render()
    {
      return (
        <div className="TimerContainer">
          <Header />
          <Clock
            currentTime={this.state.currentTime}
          />
          <SetTimer />
        </div>
      );
    }
  }
export default Timer