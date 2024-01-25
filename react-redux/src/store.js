// import { legacy_createStore as createStore } from 'redux';
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

// (1)
// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = text => {
//   return {
//     type: ADD,
//     text
//   };
// };

// const deleteToDo = id => {
//   return {
//     type: DELETE,
//     id: parseInt(id)
//   };
// };

// (2)
// function임
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// (1)
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter(toDo => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// (3)
// state를 mutate 할 수 있다 (이 경우엔 return 하면 안 됨)
// 새로운 state를 return 할 수도 있음
const reducer = createReducer([], (builder) => {
  builder
  .addCase(addToDo, (state, action) => {
  state.push({ text: action.payload, id: Date.now() });
  })
  .addCase(deleteToDo, (state, action) => {
    return state.filter((toDo) => toDo.id !== action.payload);
  });
  });

// (2)
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter(toDo => toDo.id !== action.payload)
// });

// const store = createStore(reducer);

const store = configureStore( { reducer });

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;