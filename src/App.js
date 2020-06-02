import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <Route path="/pokemons" />
          <Route path="/types" />
        </div>
      </div>
    </Router>
  );
}

export default App;
