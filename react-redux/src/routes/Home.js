import React, { useState } from 'react'

export default function Home() {
    const [text, setText] = useState("");

    function onClick(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onClick}/>
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    )
}
