import {
    FETCH_LOCATIONS
  } from '../actions/actionTypes';

    function locations(state = { location: {} }, action) {
      switch(action.type) {
        case FETCH_LOCATIONS:
            console.log(action)
          return Object.assign({}, state, {
            locations: action.payload
          })
        default:
          return state
      }
    }

    export default locations;
