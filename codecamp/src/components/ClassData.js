import React, { Component } from "react";

class Demo extends Component {
  state = {
    name: "nedim",
    surname: "kankul",
    count: 0
  };
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.setState(countDelete => {
      return {count : 0};
    });
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.surname}</h1>
        <h4>{this.state.count}</h4>
        <button onClick={this.handleClick}>TUŞ</button>
        <button onClick={this.handleDelete}>sıfırlama</button>
      </div>
    );
  }
}

export default Demo;
