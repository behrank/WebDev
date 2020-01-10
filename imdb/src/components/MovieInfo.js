import React from "react";

const MovieInfo = props => {
  return (
    <div className="MovieInfo">
      <h1>{props.movie.original_title}</h1>
      <div>
          {props.directors.length > 1 ? <h4>Directors</h4> : <h3>Director</h3>}
          {props.directors.map((element,i) => {
          return <p key={i}>{element.name}</p>
          })}
      </div>
      <h5>Yayınlanma Tarihi</h5>
      <p>{props.movie.release_date}</p>
      <h5>Overview</h5>
      <p>{props.movie.overview}</p>
      <h5>Bütçe</h5>
      <p>{props.movie.budget}</p>
    </div>
  );
};

export default MovieInfo;
