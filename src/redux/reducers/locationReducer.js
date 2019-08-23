import {
    FETCH_LOCATIONS,
    FETCH_A_LOCATION
  } from '../actions/actionTypes';

function locations(state = { locations: [], subLocations: [] }, action) {
  switch(action.type) {
    case FETCH_LOCATIONS:
      return Object.assign({}, state, {
        locations: action.payload
      })
    case FETCH_A_LOCATION:
      return Object.assign({}, state, {
        subLocations: action.payload
      })
    default:
      return state
  }
}

export default locations;
