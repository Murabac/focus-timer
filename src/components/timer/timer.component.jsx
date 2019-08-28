import React, {Component} from 'react';
import moment from 'moment'
import {Header} from '../header/header.component'
import Clock from '../clock/clock.component'
import SetTimer from '../setTimer/setTimer.component'

import './layout.styles.css'

class Timer extends Component {
    constructor() {
      super();
  
      this.state = {
        currentTime: moment.duration(25, 'minutes'),
        baseTime: moment.duration(25, 'minutes'),
      };

    this.setBaseTime = this.setBaseTime.bind(this)

    }
    
    setBaseTime(newBaseTime) {
      this.setState({
        baseTime: newBaseTime,
        currentTime: newBaseTime,
      });
    }
  
  
    render()
    {
      return (
        <div className="TimerContainer">
          <Header />
          <Clock
            currentTime={this.state.currentTime}
          />
          <SetTimer 
            baseTime={this.state.baseTime}
            setBaseTime={this.setBaseTime}
           />
        </div>
      );
    }
  }
export default Timer