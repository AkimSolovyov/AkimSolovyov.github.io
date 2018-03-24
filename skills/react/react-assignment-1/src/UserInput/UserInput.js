import React from 'react';
import './UserInput.css';

const userInput = (props) => {

    return (
        <input className="UserInput" type="text" 
        value={props.data}  
        placeholder={props.data} 
        onChange={props.onChange} />
    )
}

export default userInput;