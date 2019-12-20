import React from "react";
import "./list.css";

const SerialList = props => {
  return (
    <div>
      <ul className="serial-list">
        {props.list.map(serial => (
          <li key={serial.show.id}>{serial.show.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SerialList;
