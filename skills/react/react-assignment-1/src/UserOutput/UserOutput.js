import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {

    return (
        <div className="UserOutput">
            <p>{props.text} written by {props.username}</p>
            <p>{props.text}</p>
        </div>
    )
}

export default userOutput;