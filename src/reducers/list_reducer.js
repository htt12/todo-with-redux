import types from '../actions/types';

//Contains the state. State of reducers do not have to be objects
const DEFAULT_STATE = {
    items: [],
    
};

export default function (state = DEFAULT_STATE, action){
    switch (action.type){
        case types.GET_LIST_DATA:
            console.log('LIST REDUCER - GET LIST', action.payload)
            return {...state, items: action.payload.data.todos};
        default:
            return state;
    }
}