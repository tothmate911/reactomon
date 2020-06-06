import React from 'react';

import Pokemon from './Pokemon';

const PokemonList = (props) => {
  return (
    <div className="card-container">
      {props.pokemonsDetailed.map((pokemon) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
