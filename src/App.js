import React,  {Component} from 'react';
import {TimerContainer} from './components/layout/layout.component'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="container">
            <TimerContainer />
      </div>
    );
  }
}

export default App;