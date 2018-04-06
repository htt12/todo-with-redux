//bring all reducers here. ROOT REDUCER

import {combineReducers} from 'redux';
import listReducer from './list_reducer';


export default combineReducers({
    list: listReducer,
});