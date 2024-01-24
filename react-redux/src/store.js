// import React from 'react'
import { legacy_createStore } from "redux";

//index에서 연결한다

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
    return{
        type: ADD,
        text
    }
}

const deleteToDo = id => {
    return{
        type: DELETE,
        id
    }
}

const reducer = (state= ['hello'], action) => {
    switch(action.value){
        case ADD:
            return [{text: action.text, id: Date.now()}, ...state];
        case DELETE:
            return state.filter(toDo => toDo !== action.id);
        default:
            return state;
    }
}

const store = legacy_createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
};

export default store;
