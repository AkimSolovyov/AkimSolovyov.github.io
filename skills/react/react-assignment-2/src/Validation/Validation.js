import React from 'react';

const Validation = (props) => {
    let errorMsg;
    
    if (props.textLength > 0 && props.textLength < 5) {
        errorMsg = "Text too short"
    }

    if (props.textLength > 10) {
        errorMsg = "Text too long"
    }

    return (
        <div className="Validation" textLength={props.textLength}>
            { errorMsg ?
            <p style={{color:"red"}}>{errorMsg}</p>
              : null
            }
        </div>
    )
}

export default Validation;