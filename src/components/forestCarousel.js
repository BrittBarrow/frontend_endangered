import React from "react";

class ForestCarousel extends React.Component {
  render() {
    let { allForests, handleClick } = this.props;

    return (
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {allForests.map((forest, index) => {
            return (
              <div
                className="carousel-item active"
                key={index}
                onClick={() => handleClick(forest)}
              >
                <img
                  className="d-block w-100"
                  src={forest.image}
                  alt={forest.name}
                />
                <div>
                  <h5>{forest.name}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ForestCarousel;
