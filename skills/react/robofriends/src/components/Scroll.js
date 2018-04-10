import React from 'react';


const Scroll = (props) => {
  return (
    <div style={{
      'overflow-y': 'scroll',
      'border-top': '5px solid black',
      'margin-top': '50px',
      height: '530px'
    }}>
      {props.children}
    </div>
  );
}

export default Scroll;