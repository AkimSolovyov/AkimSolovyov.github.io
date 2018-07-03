import React from 'react';

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        borderTop: '5px solid black',
        marginTop: '50px',
        height: '530px'
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
