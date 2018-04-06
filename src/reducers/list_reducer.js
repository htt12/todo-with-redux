import Types from '../actions/types';

//Contains the state. State of reducers do not have to be objects
const DEFAULT_STATE = {
    items: [],
    
};

export default function (state = DEFAULT_STATE, action){
    switch (action.type){
        default:
            return state;
    }
}