import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
// import _ from "lodash";

class PokemonPage extends React.Component {
  state = {
    pokies: this.props.pokies
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokies => this.setState({ pokies: pokies }));
  }

  search = event => {
    let newPokies = [];
    this.props.pokies.filter(poki => {
      if (poki.name.includes(event.target.value)) {
        newPokies.push(poki);
      }
      this.setState({
        pokies: newPokies
      });
    });

    // 1. filter this.state.pokies to be the updated pokies...
    // ...list and set it equal to a new variable
    // 2. after #1, this.setState({ pokies: newPokies })
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.search} />
        <br />
        <PokemonCollection pokies={this.state.pokies} />
        <br />
        <PokemonForm />
      </div>
    );
  }
}

export default PokemonPage;
