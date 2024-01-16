import { legacy_createStore } from "redux";
// 최신 버전에서는 

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

// count가 정의되지 않았다면 count를 0으로
// action은 redux에서 function을 부를 때 쓰는 두 번째 parameter
// action을 통해 countModifier에서 동작 
const countModifier = (count = 0, action) => {
  console.log(count, action);
  // if(action.type === "ADD") {
  //   return count + 1;
  // } else if (action.type === "MINUS") {
  //   return count - 1;
  // } else {
  //   return count;
  // }

  // switch를 주로 사용함
  switch(action.type){
    case ADD :
      return count + 1;
    case MINUS :
      return count - 1;
    default :
      return count;
  }
};

// countStore (= store)는 데이터를 저장하는 곳
// countModifier는 데이터를 modify하는 함수
const countStore = legacy_createStore(countModifier);

// countModifier에게 메세지를 보내는 방법 (dispatch)
// countStore.dispatch({type : "ADD"});

// console.log(countStore.getState());

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
  // action은 type이 필수
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
