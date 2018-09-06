import React from "react";

class Donation extends React.Component {
  totalDonations = () => {
    let { donations } = this.props;
    let total = [];
    let result = [];
    donations.map(d => {
      total.push(d.amount);
    });
    result = total.map(Number);
    //result is now a number & not a string
    console.log(result);
    let grandTotal = result.reduce((a, b) => a + b);
    return grandTotal;
  };

  donations = () => {
    let { forestDonations } = this.props;
    let total = [];
    forestDonations.map(d => {
      total.push(d.amount);
    });
    total = total.map(Number);
    total = total.reduce((a, b) => a + b);
    return total;
  };

  render() {
    let { donations, forestDonations } = this.props;

    // percentage of total donations for this forest
    return <div>{`$${this.donations()} of $${this.totalDonations()}`}</div>;
  }
}

export default Donation;
