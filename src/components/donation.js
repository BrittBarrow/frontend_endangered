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

  donations = () => {
    let { forestDonations } = this.props;
    let total = [];
    let result = [];
    let grandTotal;
    forestDonations.map(d => {
      return total.push(d.amount);
    });
    result = total.map(Number);
    //total is an array of numbers

    grandTotal = result.reduce((a, b) => a + b);
    return grandTotal;
  };

  // {`$${this.donations()} of $${this.totalDonations()}`}
  render() {
    let { donations, forestDonations } = this.props;
    donations = this.donations();
    forestDonations = this.totalDonations();

    // percentage of total donations for this forest
    return (
      <div>
        <div>
          <PiChart allDonations={donations} forestDonations={forestDonations} />
        </div>

        {`$${donations} of $${forestDonations}`}
      </div>
    );
  }
}

export default Donation;
