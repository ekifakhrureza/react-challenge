import { GET_DATA } from './actionTypes'

const initialState = []

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return [...action.payload]
        
        default:
            return state;
    }
}

export default reducers;