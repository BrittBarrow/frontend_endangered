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

// class ForestCarousel extends React.Component {
//   render() {
//     let { allForests, handleClick } = this.props;
//
//     return (
//       <div
//         id="carouselExampleSlidesOnly"
//         className="carousel slide"
//         data-ride="carousel"
//       >
//         <div className="carousel-inner">
//           {allForests.map((forest, index) => {
//             return (
//               <div
//                 className="carousel-item active"
//                 key={index}
//                 onClick={() => handleClick(forest)}
//               >
//                 <img
//                   className="d-block w-100"
//                   src={forest.image}
//                   alt={forest.name}
//                 />
//                 <div>
//                   <h5>{forest.name}</h5>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

export default ForestCarousel;
