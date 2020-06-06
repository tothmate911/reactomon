import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import PokemonDetail from './components/PokemonDetail';

const App = (props) => {
  const [pokemonsDetailed, setPokemonsDetailed] = useState([]);

  const fetchData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) =>
      res.data.results.forEach((pokemon) => {
        axios.get(pokemon.url).then((res) => {
          setPokemonsDetailed((pokemonsDetailed) => [
            ...pokemonsDetailed,
            res.data,
          ]);
        });
      })
    );
  };

  useEffect(fetchData, []);

  const getPokemon = (id) => {
    return pokemonsDetailed.find((pokemon) => pokemon.id === id);
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <Route
            path="/pokemons"
            render={() => <PokemonList pokemonsDetailed={pokemonsDetailed} />}
          />
          <Route path="/types" render={() => <TypeList />} />
          <Route
            path="/pokemon/:id"
            render={(props) => (
              <PokemonDetail {...props} getPokemon={getPokemon} />
            )}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
