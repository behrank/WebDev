import React, { Component } from "react";
import EventDb from "./eventdb";

class EventAdd extends Component {
  state = {
    sayfaSayisi: 1
  };

  handleIncrement = () => {
    this.setState({ sayfaSayisi : this.state.sayfaSayisi +1 });
   //console.log (this.state.sayfaSayisi)
  };
  render() {
    return (
      <div>
  <h4>dsadssa</h4>
        <EventDb currentPage = {this.state.sayfaSayisi} />

        <button onClick={this.handleIncrement}>İleri</button>
      </div>
    );
  }
}

export default EventAdd;
