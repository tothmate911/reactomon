import React from 'react';

import Card from '../elements/Card';

import { Link } from 'react-router-dom';

const Pokemon = (props) => {
  const { name, id, sprites } = props.pokemon;
  return (
    <Link to={`/pokemon/${id}`}>
      <Card>
        <div className="pokemon-image">
          {<img src={sprites.front_default} alt={name}></img>}
        </div>
        {name}
      </Card>
    </Link>
  );
};

export default Pokemon;
