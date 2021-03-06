import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 }); //REACT İÇERİSİNDE UPDATE YAPMAK İÇİN SETSTATE() KULLANILIR.
  };

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary"; // CONDİTİONAL RENDER

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
