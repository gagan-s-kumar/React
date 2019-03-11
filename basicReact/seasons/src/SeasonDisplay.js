import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is cold',
    iconName: 'snowflake'
  }
}

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winner';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
const season = getSeason(props.latitude, new Date().getMonth());
const {text, iconName} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>);
}

export default SeasonDisplay;
