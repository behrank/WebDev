import React from "react";

function School(props) {
  return (
    <div>
      <h4> School needs : {props.need} </h4>
      <h4> Price : {props.price} </h4>
    </div>
  );
}
export default School;
