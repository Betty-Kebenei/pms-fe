import axios from 'axios';
import toastr from 'toastr';
import { FETCH_LOCATIONS } from './actionTypes';

export const fetchLocations = () => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`http://localhost:3000/api/v1/locations`);
      console.log(response)
      dispatch({
          type: FETCH_LOCATIONS,
          payload: response.data.data
      });
    }catch(error){
      console.log(error)
      // toastr.error(error.response.data.message);
    }
  }
}

export const postLocation = (values) => {
  return async (dispatch) => {
    try{
      await axios.post(`http://localhost:3000/api/v1/locations`, values)
      dispatch(fetchLocations());
    }catch(error){
      console.log(error)
      // toastr.error(error.response.data.message);
    }
  }
}

export const updateLocation = (id, values) => {
  return async (dispatch) => {
    try{
      await axios.put(`http://localhost:3000/api/v1/locations/${id}`, values)
      dispatch(fetchLocations());
    }catch(error){
      console.log(error)
      // toastr.error(error.response.data.message);
    }
  }
}

export const deleteLocation = (id) => {
  return async (dispatch) => {
    try{
      await axios.delete(`http://localhost:3000/api/v1/locations/${id}`)
      dispatch(fetchLocations());
    }catch(error){
      console.log(error)
      // toastr.error(error.response.data.message);
    }
  }
}

