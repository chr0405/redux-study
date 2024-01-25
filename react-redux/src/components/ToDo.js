import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from 'react-router-dom';

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // id를 가지고 있으니 다른 arg 가 필요 없다
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  };
}


// state는 신경 쓰지 않고 dispatch만
export default connect(null, mapDispatchToProps)(ToDo);