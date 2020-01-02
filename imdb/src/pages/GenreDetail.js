import React, { Component } from "react";
import { Link } from "react-router-dom";

class GenreMovies extends Component {
  state = {
    movies: []
  };

  
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=2761666cfb827ef7f1eaaa23c8aab037&language=en-US&with_genres=${id}&page=1`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.results });
        //console.log(data);
      });
  }
  render() {
    const { movies } = this.state;
    //console.log(this.props)
    return (
      <div>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/${movie.id}`}>{movie.title} </Link>
            </li>
          ))}
        </ul>
        
      </div>
    );
  }
}

export default GenreMovies;

