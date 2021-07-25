import React from 'react';
import './style.css';
import Day from './Day.js';

class Calendar extends React.Component {
  state = {
    message : ""
  }

  constructor() {
    super();
    this.state = { isCurrentDay: 0 };
  }

  checksIfCurrentDate = (isDate) => {
    this.setState({message : isDate})
  }

  render () {
    return(
      <table className="tg">
        <thead>
          <tr className="twoRow">
            <th colSpan="7" rowSpan="2">{CurrentMonth} {CurrentYear}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="blue">
            <td className="dayofweek">Sunday</td>
            <td className="dayofweek">Monday</td>
            <td className="dayofweek">Tuesday</td>
            <td className="dayofweek">Wednesday</td>
            <td className="dayofweek">Thursday</td>
            <td className="dayofweek">Friday</td>
            <td className="dayofweek">Saturday</td>
          </tr>
          <tr className="black">
            <td><Day daynumber={splitDaysOfMonth[0][0]} daycheck={this.checksIfCurrentDate}/>{this.state.message}</td>
            <td><Day daynumber={splitDaysOfMonth[0][1]}/></td>
            <td><Day daynumber={splitDaysOfMonth[0][2]}/></td>
            <td><Day daynumber={splitDaysOfMonth[0][3]}/></td>
            <td><Day daynumber={splitDaysOfMonth[0][4]}/></td>
            <td><Day daynumber={splitDaysOfMonth[0][5]}/></td>
            <td><Day daynumber={splitDaysOfMonth[0][6]}/></td>
          </tr>
          <tr className="black">
            <td><Day daynumber={splitDaysOfMonth[1][0]}/></td>
            <td><Day daynumber={splitDaysOfMonth[1][1]}/></td>
            <td><Day daynumber={splitDaysOfMonth[1][2]}/></td>
            <td><Day daynumber={splitDaysOfMonth[1][3]}/></td>
            <td><Day daynumber={splitDaysOfMonth[1][4]}/></td>
            <td><Day daynumber={splitDaysOfMonth[1][5]}/></td>
            <td><Day daynumber={splitDaysOfMonth[1][6]}/></td>
          </tr>
          <tr className="black">              
            <td><Day daynumber={splitDaysOfMonth[2][0]}/></td>
            <td><Day daynumber={splitDaysOfMonth[2][1]}/></td>
            <td><Day daynumber={splitDaysOfMonth[2][2]}/></td>
            <td><Day daynumber={splitDaysOfMonth[2][3]}/></td>
            <td><Day daynumber={splitDaysOfMonth[2][4]}/></td>
            <td><Day daynumber={splitDaysOfMonth[2][5]}/></td>
            <td><Day daynumber={splitDaysOfMonth[2][6]}/></td>
          </tr>
          <tr className="black">
            <td><Day daynumber={splitDaysOfMonth[3][0]}/></td>
            <td><Day daynumber={splitDaysOfMonth[3][1]}/></td>
            <td><Day daynumber={splitDaysOfMonth[3][2]}/></td>
            <td><Day daynumber={splitDaysOfMonth[3][3]}/></td>
            <td><Day daynumber={splitDaysOfMonth[3][4]}/></td>
            <td><Day daynumber={splitDaysOfMonth[3][5]}/></td>
            <td><Day daynumber={splitDaysOfMonth[3][6]}/></td>
          </tr>
          <tr className="black">
            <td><Day daynumber={splitDaysOfMonth[4][0]}/></td>
            <td><Day daynumber={splitDaysOfMonth[4][1]}/></td>
            <td><Day daynumber={splitDaysOfMonth[4][2]}/></td>
            <td><Day daynumber={splitDaysOfMonth[4][3]}/></td>
            <td><Day daynumber={splitDaysOfMonth[4][4]}/></td>
            <td><Day daynumber={splitDaysOfMonth[4][5]}/></td>
            <td><Day daynumber={splitDaysOfMonth[4][6]}/></td>
          </tr>
          { splitDaysOfMonth[5][0] !== null ? <LastRow/> : null }
        </tbody>
      </table>
    )
  }
}

const LastRow = () => (
  <tr>
    <td><Day daynumber={splitDaysOfMonth[5][0]}/></td>
    <td><Day daynumber={splitDaysOfMonth[5][1]}/></td>
    <td><Day daynumber={splitDaysOfMonth[5][2]}/></td>
    <td><Day daynumber={splitDaysOfMonth[5][3]}/></td>
    <td><Day daynumber={splitDaysOfMonth[5][4]}/></td>
    <td><Day daynumber={splitDaysOfMonth[5][5]}/></td>
    <td><Day daynumber={splitDaysOfMonth[5][6]}/></td>
  </tr>
)

function days(month,year) {
  return new Date(year, month, 0).getDate();
}

let DaysOfMonth = []

let splitDaysOfMonth = [[],[],[],[],[],[]]

let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let day = new Date();
let CurrentMonth = months[day.getMonth()]
let CurrentYear = day.getFullYear()

function getDate(){
  for (let i = 1; i <= days(day.getMonth()+1, day.getFullYear()+1); i++) {
    let newDay = new Date(day)
    newDay.setDate(i)
    DaysOfMonth.push(newDay)
  }
  console.log('generating dates')
}

function splitDateArray(){
  let dayCounter = 0;
  for (let n = 0; n < 7; n++) {
    if (n < DaysOfMonth[0].getDay()) {
        splitDaysOfMonth[0].push(null)
      } else {
        splitDaysOfMonth[0].push(DaysOfMonth[dayCounter].getDate())
        dayCounter++;
      }
  }

  for(let n = 0; n < 7; n++) {
    splitDaysOfMonth[1].push(DaysOfMonth[dayCounter].getDate())
    dayCounter++;
  }

  for(let n = 0; n < 7; n++) {
    splitDaysOfMonth[2].push(DaysOfMonth[dayCounter].getDate())
    dayCounter++;
  }

  for(let n = 0; n < 7; n++) {
    splitDaysOfMonth[3].push(DaysOfMonth[dayCounter].getDate())
    dayCounter++;
  }

  for(let n = 0; n < 7; n++) {
    if (dayCounter < DaysOfMonth.length){
      splitDaysOfMonth[4].push(DaysOfMonth[dayCounter].getDate())
      dayCounter++;
    } else {
      splitDaysOfMonth[4].push(null)
    }
  }

  for(let n = 0; n < 7; n++) {
    if (dayCounter < DaysOfMonth.length){
      splitDaysOfMonth[5].push(DaysOfMonth[dayCounter].getDate())
      dayCounter++;
    } else {
      splitDaysOfMonth[5].push(null)
    }
  }

  console.log('putting dates in array')
}

getDate()

splitDateArray()

export default Calendar;