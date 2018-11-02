import React, { Component } from "react";
import PokemonIndex from "./components/PokemonIndex";
import "./App.css";

class App extends Component {
  state = {
    pokies: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pokies: data
        });
      });
  }
  //
  render() {
    return (
      <div className="App">
        <PokemonIndex pokies={this.state.pokies} />
      </div>
    );
  }
}
export default App;
