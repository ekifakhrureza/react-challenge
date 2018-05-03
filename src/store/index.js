import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

const combReducers = combineReducers({data: reducers})
const store = createStore(combReducers)

export default store