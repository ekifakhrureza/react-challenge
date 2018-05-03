import { GET_DATA , GET_DETAIL , CLEAR_DATA } from './actionTypes'

export function getData(payload) {
  return { type: GET_DATA, payload }
}

export function getDetail(payload) {
  return { type: GET_DETAIL, payload }
}

export function clearData(payload) {
  return { type: CLEAR_DATA, payload }
}