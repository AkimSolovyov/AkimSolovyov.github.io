import React from 'react';

const Char = (props) => {
    const style = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
    }
    return (
        <span style={style} 
        className="Char" 
        char={props.char}
        onClick = {props.click}>
        {props.char}
        </span>
    )
}

export default Char;