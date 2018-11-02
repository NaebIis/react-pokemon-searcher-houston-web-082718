import React from "react";
import { Card } from "semantic-ui-react";
// import PokemonCollection from "./PokemonCollection";

class PokemonCard extends React.Component {
  state = {
    image: this.props.poki.sprites.front
  };
  flipCard = () => {
    if (this.state.image === this.props.poki.sprites.front) {
      this.setState({
        image: this.props.poki.sprites.back
      });
    } else {
      this.setState({
        image: this.props.poki.sprites.front
      });
    }
  };

  render() {
    const poki = this.props.poki;
    return (
      <Card>
        <div>
          <div className="image" onClick={this.flipCard}>
            <img src={this.state.image} />
          </div>
          <div className="content">
            <div className="header">{poki.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {poki.stats.find(stat => stat.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
