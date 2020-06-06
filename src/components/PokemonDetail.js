import React from 'react';

import Card from '../elements/Card';

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
  return <Card style={detailedViewStyle}>{content}</Card>;
};

const detailedViewStyle = {
  margin: '0 auto',
  width: '200px',
  marginTop: '30px',
};

export default PokemonDetail;
