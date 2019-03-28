import { createStore } from 'redux';

const defaultState = {
  clickables: [{ix: 4, iy: 15}, {ix: 5, iy: 12}]
}

function moveClickables(state = defaultState, action) {
  if(action.type === "change_location"){
    return {
      ...state,
      clickables: [{ix: 5, iy: 15}, {ix: 5, iy: 13}]
    }
  }
}

const store = createStore(moveClickables);

export default store;