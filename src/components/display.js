import React from "react";
import Modal from "react-awesome-modal";

class Display extends React.Component {
  render() {
    let { forest } = this.props;
    return forest !== null ? (
      <div>
        <h1>{forest.name}</h1>
        <p>{forest.description}</p>
      </div>
    ) : null;
  }
}

export default Display;
