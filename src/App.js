//import logo from './logo.svg';
//import './App.css';

import React from "react";

function Food({name, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
    </div>
    );
}

const foodILike = [
  {
    id:1,
    name: "kimchi",
    rating: 5
  },
  {
    id:2,
    name: "potato",
    rating: 4.5
  },
  {
    id:3,
    name: "sweetpotato",
    rating: 4.7
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;