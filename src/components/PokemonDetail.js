import React from 'react';

const PokemonDetail = (props) => {
  const { id } = props.match.params;
  const pokemon = props.getPokemon(parseInt(id));

  let content = <p>Loading pokemon</p>;

  if (pokemon) {
    const { name, sprites, weight, height } = pokemon;

    content = (
      <>
        <div className="detailed-image-container">
          <img
            className="detailed-image"
            src={
              typeof sprites !== 'undefined' ? sprites.front_default : 'image'
            }
            alt={name}
          />
        </div>
        <table className="details-table">
          <tbody>
            <tr>
              <td>name: </td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>weight: </td>
              <td>{weight}</td>
            </tr>
            <tr>
              <td>height: </td>
              <td>{height}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
  return <div className="detailed-view-container">{content}</div>;
};

export default PokemonDetail;
