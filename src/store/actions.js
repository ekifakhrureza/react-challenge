import { GET_DATA } from './actionTypes'

export function getData(payload) {
  return { type: GET_DATA, payload }
}