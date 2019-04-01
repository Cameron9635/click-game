import { createStore, combineReducers } from 'redux';

const defaultState = {
  clickables: [{ix: 4, iy: 15}, {ix: 5, iy: 12}],
  timeLeft: 10
}

const actuallyMoveIt = (state, action) => {
  if(action.type === "change_location") {
    return {
      ...state,
      clickables: [{ix: generateRandomNumber(), iy: generateRandomNumber()}, {ix: generateRandomNumber(), iy: generateRandomNumber()}]
    }
  } 
}

const actuallyControlTimer = (state, action) => {
  if(action.type === 'countdown2') {
    if(state.timeLeft >= 0) {
      return {
        ...state,
        timeLeft: state.timeLeft - 1
      };
    }
  }
}

function moveClickables(state = defaultState, action) {
  if(action.type === "change_location"){
    if(state.timeLeft >= 0){ 
      console.log(state.timeLeft)
      console.log(state.clickables)
      return actuallyMoveIt(state, action);
    }
  }
  if(action.type === 'countdown2') {
    if(state.timeLeft >= 0){
      console.log("In countdown2")
      console.log(state.timeLeft);
      return actuallyControlTimer(state, action)
    }   
  }
  return state;
}

function controlTimer(state = defaultState, action) {
  if(action.type === 'countdown') {
    if(state.timeLeft >= 0){
      console.log(state.timeLeft);
      return actuallyControlTimer(state, action)
    }   
  }
  return state;
}

setInterval( function() {
  store.dispatch({
    type: 'countdown2'
  })
  store.dispatch({
    type: 'change_location'
  })
}, 1000)

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 20) + 1
}

const combined = combineReducers({
  moveClickables,
  controlTimer
})

const store = createStore(combined);

export default store;