import React, { Component } from "react";

class EventDb extends Component {
    constructor(props){
        super(props)
      this.state = {
        movies: [],
    
      };
    }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=2761666cfb827ef7f1eaaa23c8aab037&language=en-US&with_genres=18&page=${this.props.currentPage}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.results });
        //console.log(data);
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Denemesss {this.props.currentPage} </h1>

        <div>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
            {movie.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default EventDb;
