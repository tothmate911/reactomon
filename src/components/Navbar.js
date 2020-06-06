import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div style={navbarStyle}>
      <Link to="/pokemons">Pokemons</Link>
      {'  |  '}
      <Link to="/types">Types</Link>
    </div>
  );
}

const navbarStyle = {
  background: '#555',
  textAlign: 'center',
  padding: '10px',
  color: '#fff',
};
