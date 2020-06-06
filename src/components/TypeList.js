import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Type from './Type';

const TypeList = (props) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/type')
      .then((res) => setTypes(res.data.results));
  });

  return (
    <div className="card-container">
      {types.map((type) => (
        <Type key={type.name} type={type} />
      ))}
    </div>
  );
};

export default TypeList;
