import React from 'react';
import './clock.styles.css'

const leftPad = (val) => {
  if (val < 10) return `0${val}`;

  return `${val}`;
}

const Clock = (props) => (
  <div className="clock-container">
    
      <p className="clock">
      {`${leftPad(props.currentTime.get('hours'))}:${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}
      </p>
  </div>
);

export default Clock;