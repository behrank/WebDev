import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Genre from "./pages/genre";
import Serials from "./pages/serials";
import Home from "./pages/home";
import GenreDetail from "./pages/GenreDetail";
import { Route, Switch, Router, Link } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/genre" component={Genre} />
        <Route exact path="/serials" component={Serials} />
        <Route exact path="/genre/:id" component={GenreDetail} />
      </React.Fragment>
    </div>
  );
}

export default App;
