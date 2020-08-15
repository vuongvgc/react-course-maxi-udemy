import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" value={props.value} onChange={props.changleName} />
        </div>
    )
}
export default UserInput;