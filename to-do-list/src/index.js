import { legacy_createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// li를 담아야 하니 state를 빈 배열로
// mutating state를 쓰지 x, 새로운 object를 return 해야 함
const reducer = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_TODO :
      // ...state는 ES6로 모든 state array의 contents를 의미
      const newToDoObj = {text : action.text, id: Date.now() }
      return [newToDoObj, ...state];

    case DELETE_TODO :
      // filter()는 자바 스크립트
      const cleaned = state.filter(toDo => toDo.id !== action.id);
      return cleaned;
    default :
      return state;
  }
};

const store = legacy_createStore(reducer);

const deleteToDo = id => {
  return{
    type : DELETE_TODO,
    id
  };
}

const dispatchDeleteToDo = e => {
  // console.log(e.target.parentNode.id);
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
}

const addToDo = text => {
  return{
    type: ADD_TODO,
    text
  };
};

const painToDos = () => {
  const toDos = store.getState();
  // .forEach 배열의 한 요소마다에 대해서
  ul.innerHTML="";
  toDos.forEach(toDo=>{
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

store.subscribe(painToDos);

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);