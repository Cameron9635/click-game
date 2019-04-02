import React from 'react';
import './App.scss';
import { connect } from 'react-redux'

const GridButton = props => {
  const clickables = props.clickables;

  const showKey = () => {
    props.dispatch({type: "change_location"});
    console.log(props.clickables);
  }

  const getButtonColor = () => {
    if(props.clickables){
      for(let i = 0; i < props.clickables.count; i++) {
        console.log(props.clickables.ix === props.x)
        if(props.clickables.ix === props.x && props.clickables.iy === props.y){
          return "#5483ce";
        }
      }
    }
    return "#cecbc8";
  }

  return (
    (props.x !== 21 ? <button 
                      onClick = {showKey} 
                      className="grid-button"
                      style={{
                        backgroundColor: getButtonColor()
                      }}
                      >
                        {props.x}
                      </button> : <br/>)
  );
}

const mapStateToProps = state => {
  return {
    clickables: state.clickables,
    timeLeft: state.timeLeft
  };
}

export default connect(mapStateToProps)(GridButton);
