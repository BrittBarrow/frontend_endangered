import React from "react";

class ForestCarousel extends React.Component {
  render() {
    let { allForests, handleClick } = this.props;

    return (
      <div className="row">
        {allForests.map((forest, index) => {
          return (
            <div key={index} onClick={() => handleClick(forest)}>
              <img src={forest.image} alt={forest.name} />
              <div>
                <h5>{forest.name}</h5>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ForestCarousel;
