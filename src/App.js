import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/navBar";
import ForestCarousel from "./components/forestCarousel";
import Display from "./components/display";
import UserProfile from "./components/userProfile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allForests: [],
      selectedForest: null,
      filter: "",
      donations: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/endangered_habitats")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ allForests: data });
      });
    this.getDonations();
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
    selectedForest = selectedForest[0];
    this.setState({ selectedForest });
  };

  getDonations = () => {
    fetch("http://localhost:3000/api/v1/donations")
      .then(resp => resp.json())
      .then(data => this.setState({ donations: data }));
  };

  handleDonation = (e, forest) => {
    let donation = e.target.innerText;
    while (donation.charAt(0) === "$") donation = donation.slice(1);
    console.log("handle donation in App ", donation, forest);
    this.postDonation(donation, forest);
  };

  postDonation = (donation, forest) => {
    let url = "http://localhost:3000/api/v1/donations";
    let data = {
      donation: { amount: donation, endangered_habitat_id: forest.id }
    };
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(data => {
        let donations = [...this.state.donations, data];
        this.setState({ donations });
      });
  };

  // filterDonations = () => {
  //   let donations = this.state.donations;
  //   return donations.filter(
  //     donations => donations.endangered_habitat_id.id === this.selectedForest.id
  //   )
  // };

  render() {
    return (
      <React.Fragment>
        <NavBar handleFilter={this.handleFilter} />
        <Route
          exact
          path="/"
          render={() => (
            <ForestCarousel
              allForests={this.state.allForests.filter(forest =>
                forest.region.includes(this.state.filter)
              )}
              handleClick={this.handleClick}
            />
          )}
        />
        <Display
          forest={this.state.selectedForest}
          donations={this.state.donations}
          handleDonation={this.handleDonation}
        />
        // <UserProfile />
      </React.Fragment>
    );
  }
}

export default App;

// <ForestCarousel
//   allForests={this.state.allForests.filter(forest =>
//     forest.region.includes(this.state.filter)
//   )}
//   handleClick={this.handleClick}
// />
//
