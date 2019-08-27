import React from 'react'

import './setTimer.styles.css'

export const SetTimer = props => {
    return (
        <div className="set-container">
            <p className="set-header">Set Timer</p>

            <div className="form-group">
                <label className="lables" for="hours">Hours</label>            
                <input type="number"  className="inputs" id="hours" name=""/>
            </div>

            <div className="form-group">
                <label className="lables" for="minutes">Minutes</label>            
                <input type="number"  className="inputs" id="minutes" name="minutes"/>
             </div>
             
            <div className="form-group">
                <label className="lables" for="seconds">Seconds</label>            
                <input type="number"   className="inputs" id="seconds" name="seconds"/>
            </div>

        </div>

    )
} 