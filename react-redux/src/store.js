import { configureStore, createSlice } from "@reduxjs/toolkit";

// createSlice는 자동적으로 Reducer를 제공
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
  }
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });