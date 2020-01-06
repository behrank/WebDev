import React, { Component } from "react";
import { Link } from "react-router-dom";

class GenreMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentPage: 1,
      apiKey: "2761666cfb827ef7f1eaaa23c8aab037"
    };
  }

<<<<<<< HEAD
=======

>>>>>>> ae5b04f4853587d3678237c75155d1fdd069f838
  componentDidMount() {
    const { id } = this.props.match.params;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.state.apiKey}&language=en-US&with_genres=${id}&page=1`;
    this.fetchItems(url);
  }

  nextPage = () => {
    let url = '';
    const { id } = this.props.match.params;
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.state.apiKey}&language=en-US&with_genres=${id}&page=${this.state.currentPage + 1}`;
    this.fetchItems(url);
    console.log(this.currentPage)
  };

  fetchItems = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.results });
        console.log(data);
      });
  };

  render() {
    const { movies } = this.state;
    //console.log(this.props)
    return (
<<<<<<< HEAD
      <div>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/${movie.id}`}>{movie.title} </Link>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary sm" onClick={this.nextPage}>İleri</button>
=======
      <div class="container">
        {movies.map(movie => (
          <div class="card" style={{ width: '18rem', float: 'left', margin: '5px' }}>
            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">{movie.original_title}</p>
            </div>
          </div>
          // <li key={movie.id}>
          //   <Link to={`/${movie.id}`}>{} </Link>
          // </li>
        ))}
>>>>>>> ae5b04f4853587d3678237c75155d1fdd069f838
      </div>
    );
  }
}

export default GenreMovies;
