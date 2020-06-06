import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import styled, { ThemeProvider, css } from 'styled-components';

import './App.css';

import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import PokemonDetail from './components/PokemonDetail';

import Button from './elements/Button';

import MovieList from './components/MovieList';
import Nav from './components/Nav';
import { MovieProvider } from './MovieContext';
import AddMovie from './components/AddMovie';

const theme = {
  primary: 'teal',
  secondary: 'green',
  alert: 'yellow',
  font: 'sans-serif',
};

const H1 = styled.h1`
  font-family: ${(props) => props.theme.font};
`;

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
        <MovieProvider>
          <Nav />
          <AddMovie />
          <MovieList />
        </MovieProvider>

        {/* <ThemeProvider theme={theme}>
          <H1>Styled components</H1>
          <form action="">
            <input type="text" />
            <button>Create</button>
            <Button color="secondary">Create</Button>
          </form>
        </ThemeProvider> */}

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
