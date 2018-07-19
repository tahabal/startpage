import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import './Time.css';

export function Time(){
    return(
        <div class="time">
            <div class="hour">
                <Moment 
                    interval={1000}
                    format="HH:mm" />
            </div>
            <div class="day">
                <Moment
                    interval={60000}
                    format="dddd" />
            </div>
            <div class="date">
                <Moment 
                    format="DD/MM/YY"
                    interval={60000}/>
            </div>
        </div>
    );
}