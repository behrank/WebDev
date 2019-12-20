import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Genre from "./pages/genre";
import Serials from "./pages/serials";
import Home from "./pages/home";
import { Route, Switch, Router } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/genre" component={Genre} />
        <Route exact path="/serials" component={Serials} />
      </React.Fragment>
    </div>
  );
}

export default App;
