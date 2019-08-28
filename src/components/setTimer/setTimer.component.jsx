import React, {Component} from 'react'
import {Start} from '../buttons/start.component'
import './setTimer.styles.css'

class  SetTimer extends Component  {
    constructor(){
        super()

        this.handleChange =  this.handleChange.bind(this)
    }
    handleChange(e){
        const  newBaseTime = this.props.baseTime

        if (e.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hour'), 'hours').add(parseInt(e.target.value, 10), 'hours');
        if (e.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(e.target.value, 10), 'minutes');
        if (e.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(e.target.value, 10), 'seconds');
        
        this.props.setBaseTime(newBaseTime);

        
    }
    render(){
    return (
        <div className="set-container">
            <p className="set-header">Set Timer</p>

            <div className="form-group">
                <label className="lables" for="hours">Hours</label>            
                <input 
                type="number"  
                className="inputs" 
                id="hours" 
                name="" 
                defaultValue={this.props.baseTime.get('hours')}
                onChange={this.handleChange}
                />
            </div>

            <div className="form-group">
                <label className="lables" for="minutes">Minutes</label>            
                <input 
                type="number"  
                className="inputs" 
                id="minutes" 
                name="minutes" 
                defaultValue={this.props.baseTime.get('minutes')}
                onChange={this.handleChange}
                />
             </div>
             
            <div className="form-group">
                <label className="lables" for="seconds">Seconds</label>            
                <input 
                type="number"   
                className="inputs" 
                id="seconds" 
                name="seconds" 
                defaultValue={this.props.baseTime.get('seconds')}
                onChange={this.handleChange}
                />
            </div>
            
            <Start />
        </div>

    )
}
} 
export default SetTimer