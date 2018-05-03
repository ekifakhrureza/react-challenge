import { GET_DATA, GET_DETAIL, CLEAR_DATA } from './actionTypes'

const initialState = []

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return [...action.payload]
        case GET_DETAIL:
            return [...action.payload]
        case CLEAR_DATA:
            return initialState    
        default:
            return state;
    }
}

export default reducers;