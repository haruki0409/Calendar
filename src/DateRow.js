import React from 'react';
import Day from './Day.js';

const DateRow = (Week) => { 
    var DateList = []
    for (let i = 0; i < 7; i++) {
        let date = new Date();
        DateList.push(<Day DayNumber={date.getDay()}/>)
    }

    return (
        <div>
           <td>{DateList}</td>
        </div>
    )
}

export default DateRow;