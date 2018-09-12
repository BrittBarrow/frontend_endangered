import React from "react";
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../css/forestCarousel.css";

class ForestCarousel extends React.Component {
  render() {
    let { allForests, handleClick } = this.props;

    const settings = {
      autoplay: true,
      centerMode: true,
      centerPadding: "100px",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        {allForests.map((forest, index) => {
          return (
            <a href={`#${forest.name}`} key={index}>
              <div className="carousel" onClick={() => handleClick(forest)}>
                <img src={forest.image} alt={forest.name} />
                <p className="text">{forest.name}</p>
              </div>
            </a>
          );
        })}
      </Slider>
    );
  }
}

export default ForestCarousel;
