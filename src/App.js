import React, { Component } from 'react';
import './App.scss';
import './GridButton';
import GameBoard from './GameBoard';
import { connect } from 'react-redux';

const App = props => {
  return (
    <GameBoard x={3} y={3}/>
  );
}

export default connect(function mapStateToProps(state, props) {
  return {
    clickables: state.clickables
  };
})(App);
