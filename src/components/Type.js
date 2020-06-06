import React from 'react';

import Card from '../elements/Card';

const Type = (props) => {
  const { name } = props.type;
  return <Card>{name}</Card>;
};

export default Type;
