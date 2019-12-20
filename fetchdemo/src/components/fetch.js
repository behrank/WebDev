import React, { Component } from "react";
import SerialList from "./List.js";

class FetchSerial extends Component {
  state = {
    serial: [],
    SerialName: " ",
    Isfething: false
  };

  onSeriesInputChange = e => {
    this.setState({ SerialName: e.target.value, Isfething: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ serial: json, Isfething: false }));
  };

  render() {
    const { serial, SerialName, Isfething } = this.state;

    return (
      <div>
        <div>
          <input
            value={SerialName}
            type="text"
            onChange={this.onSeriesInputChange}
          />
        </div>
        {serial.length === 0 && SerialName.trim() === "" && (
          <p>Aradığınız dizi adını giriniz</p>
        )}

        {serial.length === 0 && SerialName.trim() !== "" && (
          <p>Böyle bir dizi bulunamadı</p>
        )}

        {Isfething && <p>Aranıyor</p>}

        {!Isfething && <SerialList list={this.state.serial} />}
      </div>
    );
  }
}

export default FetchSerial;
