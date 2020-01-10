import React, { Component } from "react";
import { Link } from "react-router-dom";
import NextPageBtn from "./NextPageBtn";

class GenreMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentPage: 1,
      apiKey: "2761666cfb827ef7f1eaaa23c8aab037"
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.state.apiKey}&language=en-US&with_genres=${id}&page=1`;
    this.fetchItems(url);
  }

  nextPage = () => {
    let url = "";
    let nextPageNumber = this.state.currentPage;
    nextPageNumber += 1;
    this.setState({ currentPage: nextPageNumber });
    const { id } = this.props.match.params;
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.state.apiKey}&language=en-US&with_genres=${id}&page=${nextPageNumber}`;
    this.fetchItems(url);
   // console.log(this.currentPage);
  };
 
  fetchItems = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.results });
        //console.log(data);
      });
  };

  render() {
    const { movies } = this.state;
    //console.log(this.props)
    return (
      <div>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title} </Link>
            </li>
          ))}
          <div>
          </div>
        </ul>
        <NextPageBtn onClick={this.nextPage} />
      </div>
    );
  }
}

export default GenreMovies;

/*import React, { Component } from "react";
import { Link } from "react-router-dom";
import NextPageBtn from "./NextPageBtn";

class GenreMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentPage: 1,
      apiKey: "2761666cfb827ef7f1eaaa23c8aab037"
    };
  }

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
      <div>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/${movie.id}`}>{movie.title} </Link>
            </li>
          ))}
        </ul>
       <NextPageBtn text = "ileri" onClick={this.nextPage}/>
      </div>
    );
  }
}
*/

/*import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

class GenreMovies extends Component {
  state = {
    movies: [],
    pageNumber: 0
  };

  fetchObjects = () => {
    const nextPageNumber = this.state.pageNumber + 1;
    this.setState({ pageNumber: nextPageNumber });
    const { id } = this.props.match.params;
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=2761666cfb827ef7f1eaaa23c8aab037&language=en-US&with_genres=${id}&page=${nextPageNumber}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.results });
        this.insertObjectsToContainer(data.results);
        //console.log(data);
      });
  }

  insertObjectsToContainer = (movies) => {
    const movieList = (movies.map(movie => (
      <div class="card" style={{ width: '18rem', float: 'left', margin: '5px' }}>
        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} className="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{movie.original_title}</p>
        </div>
      </div>
    )));
    ReactDOM.render(movieList, document.getElementById('objectList'));
  }

  componentDidMount() {

  }
  render() {
    const { movies } = this.state;
    
    //console.log(this.props)
    return (
      <div className="container">
        <button type="button" onClick={this.fetchObjects}>Load</button>
        <div id="objectList">

        </div>
      </div>
    );
  }
}*/
