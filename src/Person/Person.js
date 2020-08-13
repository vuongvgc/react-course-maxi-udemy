import React from 'react';
const person = (props) => {
    return (
        <div>
            <h1 onClick={props.click}>Hey I'm {props.name} and I'm {props.age} years old</h1>
            <p>{props.children}</p>
            <input value={props.name} onChange={props.changeName} type='text'/>
        </div>
    )
}
export default person;