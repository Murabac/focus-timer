import React from 'react';
import {Header} from '../header/header.component'
import {Clock} from '../clock/clock.component'
import {SetTimer} from '../setTimer/setTimer.component'

import './layout.styles.css'

export const TimerContainer = props => {
    return(
        <div className="TimerContainer">
            <Header />
            <Clock />
            <SetTimer />
        </div>
    )
}