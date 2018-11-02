import React, { Component } from "react";
import PokemonIndex from "./components/PokemonIndex";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokies: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokies => this.setState({ pokies }));
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
