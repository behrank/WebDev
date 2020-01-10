import React, { Component } from "react";
import MovieInfo from "./MovieInfo";
import CrewInfo from "./Cast";

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      apiKey: "2761666cfb827ef7f1eaaa23c8aab037",
      directors: [],
      loading: false,
      actors:[]
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.state.apiKey}&language=en-US`;
    this.fetchItems(url);
  }

  fetchItems = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ movie: data }, () => {
            const { id } = this.props.match.params;
            const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.state.apiKey}&language=en-US`;
            fetch(url)
              .then(response => response.json())
              .then(result => {
                const directors = result.crew.filter(
                  member => member.job === "Director"
                );
                this.setState({ actors: result.cast, directors });
                console.log(result);
              });
            console.log(data);
          });
        }
      });
  };

  render() {
    return (
      <div>
        <MovieInfo movie={this.state.movie} directors={this.state.directors} />
        <div className="crew">
  <h4>Oyuncular</h4>
    <div className="actors">{this.state.actors.map((element,i) => {
    return <p key={i}>{element.name} as {element.character}</p>

    })}</div>
        </div>
      </div>
    );
  }
}

export default SingleMovie;
