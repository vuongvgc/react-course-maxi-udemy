import React from 'react';
const ValidationName = (props) => {
    const lengthName = props.name.length;
    let validationStatus;
    validationStatus = (lengthName > 5) ? 'Name is too long' : 'Name is too short';
    return (
        <p>{validationStatus}</p>
    )
}

export default ValidationName;