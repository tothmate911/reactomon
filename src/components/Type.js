import React from 'react';

const Type = (props) => {
  const { name } = props.type;
  return <div className="type-card">{name}</div>;
};

export default Type;
