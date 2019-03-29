import React from 'react';
import './App.scss';
import { connect } from 'react-redux'

const GridButton = props => {
  const showKey = () => {
    props.dispatch({type: "change_location"});
    console.log(props)
  }

  const getButtonColor = () => {
    if(props.clickables){
      for(let i = 0; i < props.clickables.count; i++) {
        if(props.clickables.ix === props.x && props.clickables.iy === props.y){
          return "Green"
        }
      }
    }
    return "Gray";
  }

  return (
    (props.x !== 21 ? <button 
                      onClick = {showKey} 
                      className="grid-button"
                      //backgroundColor={getButtonColor()}
                      >
                        {props.x}
                      </button> : <br/>)
  );
}

export default connect(function mapStateToProps(state, props) {
  return {
    clickables: state.clickables
  };
})(GridButton);