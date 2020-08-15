import React from 'react';
const person = (props) => {
    const style={
        width: '500px',
        backgroundColor: '#eee',
        boxShadow: '4px 4px #000',
        border: '1px soild #000',
        padding:'15px',
        margin: '20px'
    }
    return (
        <div style={style}>
            <h1 onClick={props.click}>Hey I'm {props.name} and I'm {props.age} years old</h1>
            <p>{props.children}</p>
            <input value={props.name} onChange={props.changeName} type='text'/>
        </div>
    )
}
export default person;