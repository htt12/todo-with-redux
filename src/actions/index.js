
import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=harry1234';

export function getList(){
    const response = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: types.GET_LIST_DATA,
        payload: response,
    }
}

export function getSingleItem(id){
    const response = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: types.GET_SINGLE_ITEM,
        payload: response,
    }
}

export function addNewItem(item){
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: response,
    }
}

//Time it was created
//Time it was completed
//Add a button to complete them toggles
//Delete item, both items should delete from client/server, redirects you back to list.
    //axios.delete(....)
//Toggle Complete
    //axios.put(....)