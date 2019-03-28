import React from 'react';
import './App.scss';

const GridButton = props => {
  const showKey = () => {
    console.log(props.clickables)
  }

  const getButtonColor = () => {
    return 0;
  }

  return (
    (props.x !== 21 ? <button onClick = {showKey} className="grid-button">{props.x}</button> : <br/>)
  );
}

export default GridButton;