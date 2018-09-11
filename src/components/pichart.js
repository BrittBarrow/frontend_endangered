import React from "react";
import { Pie } from "react-chartjs-2";

class PiChart extends React.Component {
  render() {
    let { allDonations, forestDonations, forest } = this.props;

    let data = {
      labels: ["Total", `${forest.name}`],
      datasets: [
        {
          backgroundColor: ["orange", "green"],
          data: [allDonations, forestDonations]
        }
      ]
    };
    let options = {
      title: {
        display: true,
        text: `Donor Activity For The ${forest.name}`,
        position: "top",
        size: "18px"
      }
    };
    return (
      <div className="chart">
        <Pie data={data} options={options} />
      </div>
    );
  }
}

export default PiChart;
