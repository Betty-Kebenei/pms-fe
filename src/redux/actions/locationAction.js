import axios from 'axios';
import toastr from 'toastr';
import { FETCH_LOCATIONS, FETCH_A_LOCATION } from './actionTypes';

export const fetchLocations = () => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`http://localhost:3000/api/v1/locations`);
      dispatch({
          type: FETCH_LOCATIONS,
          payload: response.data.data
      });
    }catch(error){
      toastr.error(error.response.data.message);
    }
  }
}

export const fetchALocation = (id) => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`http://localhost:3000/api/v1/locations/${id}`);
      dispatch({
          type: FETCH_A_LOCATION,
          payload: response.data.data
      });
    }catch(error){
      toastr.error(error.response.data.message);
    }
  }
}

export const postLocation = (values) => {
  return async (dispatch) => {
    try{
      await axios.post(`http://localhost:3000/api/v1/locations`, values)
      dispatch(fetchLocations());
      toastr.success("Location successfully added!");
    }catch(error){
      toastr.error(error.response.data.message);
    }
  }
}

export const updateLocation = (id, values) => {
  return async (dispatch) => {
    try{
      await axios.put(`http://localhost:3000/api/v1/locations/${id}`, values)
      dispatch(fetchLocations());
      toastr.success("Location successfully updated!");
    }catch(error){
      toastr.error(error.response.data.message);
    }
  }
}

export const deleteLocation = (id) => {
  return async (dispatch) => {
    try{
      await axios.delete(`http://localhost:3000/api/v1/locations/${id}`)
      dispatch(fetchLocations());
      toastr.success("Location successfully deleted!");
    }catch(error){
      toastr.error(error.response.data.message);
    }
  }
}

