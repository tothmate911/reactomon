import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Lord of the Rings 1',
      price: '10',
      id: 1,
    },
    {
      name: 'Lord of the Rings 2',
      price: '20',
      id: 12,
    },
    {
      name: 'Lord of the Rings 3',
      price: '30',
      id: 123,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
