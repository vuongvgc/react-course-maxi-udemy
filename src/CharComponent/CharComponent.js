import React from 'react';
const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
}
const Char  = (props) => {
    return (
    <ul>{props.name}</ul>
    )
}
const CharComponent = (props) => {
    const name= props.name
    const nameArray = props.name.split('');
    let listName ;
    for(let i = 0 ; i < name.length ; i ++) {
        listName = nameArray.map((name) =>
           <li key={name} style={style}>{name}</li>)
    }
    return (
       <Char name={listName} />
    )
}
export default CharComponent;