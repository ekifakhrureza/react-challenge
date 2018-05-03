import { GET_DATA , GET_DETAIL } from './actionTypes'

export function getData(payload) {
  return { type: GET_DATA, payload }
}

export function getData(payload) {
  return { type: GET_DETAIL, payload }
}