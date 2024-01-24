import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from "../components/ToDo";

function Home({toDos, addToDo}) {
    const [text, setText] = useState("");

    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            {/* re-render 해야 하는 부분으로
            store로부터 state를 가져올 수 있도록 해야 함
            connect를 통해서 components들을 store에 연결시킨다*/}
            <ul>
                {toDos.map(toDo => (
                <ToDo {...toDo} key={toDo.id}/>
                ))}
            </ul>
        </>
    );
}

// mapStateToProps
// function mapStateToProps(state, ownProps?)
// state는 redux에서 온 state, ownProps는 component의 props
function mapStateToProps(state) {
    // 여기서 return 하면 Home.js porps에 추가
    return { toDos : state };
}

function mapDispatchToPtops(dispatch){
    // return { dispatch };
    return {
        //fuction
        addToDo: text => dispatch(actionCreators.addToDo(text))
    };
}


// getCurrentState를 통해 state를 가져옴. Home 컴포넌트와 함께
// 만약 dispatch만 사용하고자 한다면 (null, mapDispatchToPtops)
export default connect(mapStateToProps, mapDispatchToPtops)(Home);