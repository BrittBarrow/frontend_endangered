import React from "react";
import "../css/donations.css";
import PiChart from "./pichart";

class Donation extends React.Component {
  totalDonations = () => {
    let { donations } = this.props;
    let total = [];
    let result = [];
    donations.map(d => {
      return total.push(d.amount);
    });
    result = total.map(Number);
    //result is now an array of numbers & not a string
    console.log(result);
    let grandTotal = result.reduce((a, b) => a + b);
    return grandTotal;
  };

  getForestDonations = () => {
    let { donations, forest } = this.props;

    return donations.filter(
      donation => donation.endangered_habitat_id === forest.id
    );
  };

  // let { forestDonations } = this.props;
  donations = () => {
    let { donations, forest } = this.props;

    let specificDonations = donations.filter(
      donation => donation.endangered_habitat_id === forest.id
    );

    let total = [];
    let result = [];
    specificDonations.map(d => {
      return total.push(d.amount);
    });
    result = total.map(Number);
    //result is now an array of numbers & not a string
    console.log(result);
    let grandTotal = result.reduce((a, b) => a + b);
    return grandTotal;
  };

  render() {
    let { donations, forest } = this.props;
    let forestDonations = this.donations();
    donations = this.totalDonations();

    // percentage of total donations for this forest
    console.log("donation props", this.props);
    console.log("forest", forestDonations);
    console.log("total", donations);
    return (
      <div>
        <div>
          <PiChart
            allDonations={donations}
            forestDonations={forestDonations}
            forest={forest}
          />
        </div>

        {`$${forestDonations} of $${donations}`}
      </div>
    );
  }
}

export default Donation;
