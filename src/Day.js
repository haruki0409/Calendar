import React from 'react';
import './style.css';

class Day extends React.Component{
    constructor(props) {
        super(props);
        var currentDate = new Date()
        var isCurrentDate = false;
    }

    sendData = () => {
        this.props.dayCheck()
    }

    render() {
        if (this.currentDate === this.props.currentDay) {
            return (
                <div className="Current_Day">
                    <p className="Day_Selected">{this.props.daynumber}</p>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p className="Day_Number">{this.props.daynumber}</p>
                </div>
            )
        }
    }
}

export default Day;