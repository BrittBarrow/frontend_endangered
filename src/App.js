import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/navBar";
import ForestCarousel from "./components/forestCarousel";
import Display from "./components/display";
// import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allForests: [],
      selectedForest: [],
      filter: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/endangered_habitats")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ allForests: data });
      });
  }

  handleFilter = event => {
    let filter = event.target.innerHTML;
    this.setState({ filter });
  };

  handleClick = obj => {
    let allForests = this.state.allForests;
    let selectedForest = allForests.filter(forest => {
      return forest.name === obj.name;
    });
    this.setState({ selectedForest });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar handleFilter={this.handleFilter} />
        <ForestCarousel
          allForests={this.state.allForests.filter(forest =>
            forest.region.includes(this.state.filter)
          )}
          handleClick={this.handleClick}
        />

        <Display forest={this.state.selectedForest} />
      </React.Fragment>
    );
  }
}

export default App;
