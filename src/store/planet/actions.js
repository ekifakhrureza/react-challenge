import { GET_DATA, GET_ERROR, GET_PENDING, GET_DETAIL, CLEAR_DATA } from './actionTypes'
import axios from 'axios'

export const getData = () => {
  return dispatch => {
    // dispatch(clearData())
    dispatch(pending())
    axios.get('https://swapi.co/api/planets/')
      .then((response) => {
        dispatch(success(response.data.results))
      })
      .catch((err) => {
        dispatch(error(err))
      })
  }
}

export const getDetail = (id) => {
  return dispatch => {
    // dispatch(clearData())
    dispatch(pending())
    axios.get(`https://swapi.co/api/planets/${id}`)
      .then(response => {
        dispatch(successDetail([response.data]))
        console.log(response.data);
        
      })
      .catch(err => {
        dispatch(error(err))
      })
  }
}

function success(payload) {
  return { type: GET_DATA, payload }
}

function successDetail(payload) {
  return { type: GET_DETAIL, payload }
}

function error(payload) {
  return { type: GET_ERROR, payload }
}

function pending() {
  return { type: GET_PENDING }
}

function clearData(payload) {
  return { type: CLEAR_DATA, payload }
}