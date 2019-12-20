import React from "react";

function Joke(props) {
  return (
    <div>
      <h3>question : {props.question}</h3>
      <h3>Answer : {props.punchLine}</h3>
    </div>
  );
}
export default Joke;
