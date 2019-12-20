import React, { Component } from "react";

class MovieGenre extends Component {
  constructor(props){
    super(props);
  this.state = {
    serials: []
  }
};

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=2761666cfb827ef7f1eaaa23c8aab037&language=en-US")
      .then(response => response.json())
      .then(data => {
        this.setState({ serials: data });
        console.log(data)
      });
  }
  render() {
  return <div>asdasdsadas{this.state.serials.length}</div>;
  }
}

export default MovieGenre;
