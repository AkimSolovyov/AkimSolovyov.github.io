import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div className="tc ma5">
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            firstName={robots[i].first_name}
            lastName={robots[i].last_name}
            avatar={robots[i].avatar}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
