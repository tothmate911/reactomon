import React from 'react';

import { Link } from 'react-router-dom';

const Pokemon = (props) => {
  const { name, id, sprites } = props.pokemon;
  return (
    <Link to={`/pokemon/${id}`}>
      <div className="pokemon-card">
        <div className="pokemon-image">
          {<img src={sprites.front_default} alt={name}></img>}
        </div>
        {name}
      </div>
    </Link>
  );
};

export default Pokemon;
