import React, { Component } from "react";
import MovieGenre from "../components/fetch";

class Genre extends Component {
  state = {};
  render() {
    return <div>Genre page
      <MovieGenre/>
    </div>;
  }
}

export default Genre;
