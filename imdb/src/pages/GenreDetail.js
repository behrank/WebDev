/*import React, { Component } from "react";
import { Link } from "react-router-dom";*/
import React, { useState, useEffect } from "react";

function GenreMovies({ match }) {
  useEffect(() => {
    fetchItem();
   // console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=2761666cfb827ef7f1eaaa23c8aab037&language=en-US&sort_by=with_genres=${match.params.id}&page=1`
    );
    const item = await fetchItem.json();

    console.log(item);
  };
  return (
    <div> genrdsffds</div>
  )
}

export default GenreMovies;

//
//https://api.themoviedb.org/3/discover/movie?api_key=2761666cfb827ef7f1eaaa23c8aab037&language=en-US&sort_by=with_genres=18&page=1

/*

*/
