import React, { Component } from "react";
import Series from '../../containers/series'
import "./App.css";
import "whatwg-fetch";


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Serials Tutorial</h1>
        </header>
        
        <Series />
      </div>
      
    );
  }
}

export default App;
