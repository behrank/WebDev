import React from "react";
import "./App.css";
import CodeCamp from "./codecamp";
import Deneme from "./components/info";
import Joke from "./components/joke";
import JokesData from "./components/JokesData";
import schoolProducts from "./components/schoolProducts";
import School from "./components/SchoolEnv";
import Demo from "./components/ClassData";
import UserFetch from "./components/fetch";

function App() {
  const JokeSource = JokesData.map(joke => (
    <Joke
      key={joke.id}
      Joke
      question={joke.question}
      punchLine={joke.punchLine}
    />
  ));

  const ProductsSource = schoolProducts.map(product => (
    <School key={product.id} need={product.name} price={product.price} />
  ));

  return (
    <div className="App">
      {JokeSource}
      {ProductsSource}
      <Demo />
      <UserFetch />
    </div>
  );
}

export default App;
