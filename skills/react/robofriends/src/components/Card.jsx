import React from 'react';

const Card = ({ firstName, lastName, avatar, email, id }) => {
  // const { firstName, lastName, avatar, email, id } = props;
  const fullName = `${firstName} ${lastName}`;
  return (
    <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={avatar} alt="robot" />
      <div>
        <h3>{fullName}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
