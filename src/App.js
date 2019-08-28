import React,  {Component} from 'react';
import Timer from './components/timer/timer.component.jsx'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="container">
          <Timer />
      </div>
    );
  }
}

export default App;
