import React from "react";
import Twitter from "./twitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Donation from "./donation";
import "../css/display.css";

// import Modal from "react-awesome-modal";

class Display extends React.Component {
  state = {
    comment: "",
    commentList: []
  };

  componentDidMount() {
    this.getFetch();
  }

  getFetch = () => {
    fetch("http://localhost:3000/api/v1/comments")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ commentList: data });
      });
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleClick = forest => {
    let url = `http://localhost:3000/api/v1/comments`;
    let data = {
      comment: { text: this.state.comment, endangered_habitat_id: forest.id }
    };
    if (this.state.comment !== "")
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(resp => resp.json())
        .then(data => {
          let commentList = [...this.state.commentList, data];
          this.setState({ commentList, comment: "", error: "" });
        });

    if (this.state.comment === "")
      this.setState({ error: "*Text input is required" });
  };

  // handleDonation = e => {
  //   let donation = e.target.innerText;
  //   console.log(donation);
  // };

  handleBookmark = forest => {
    console.log("This forest needs to be added to users list:", forest);
  };

  render() {
    let { forest, donations, handleDonation } = this.props;
    let { commentList } = this.state;

    console.log(donations);
    return forest !== null ? (
      <div id={forest.name}>
        <div id="container">
          <div className="row">
            <div className="col-8">
              <img
                className="rounded picture img-fluid"
                src={forest.image}
                alt={forest.name}
              />
            </div>
            <div className="col-4 description">
              <h2>{forest.name}</h2>
              <p>{forest.description}</p>
            </div>
          </div>
          <div className="row separation">
            <div className="col">
              <Twitter hashtag={forest.name} />
            </div>
            <div className="col">
              <h4>{`Share your thoughts about ${forest.name} below:`}</h4>
              <p style={{ color: "red" }}>{this.state.error}</p>
              <textarea
                cols="80"
                rows="15"
                tabIndex="101"
                value={this.state.comment}
                onChange={this.handleChange}
              />
              <button>
                <FontAwesomeIcon
                  icon="pencil-alt"
                  onClick={() => this.handleClick(forest)}
                />
              </button>
            </div>
            <div className="col">
              <p>What's Being Said &#8628;</p>
              <ul>
                {commentList
                  .filter(
                    comment => comment.endangered_habitat_id === forest.id
                  )
                  .map((comment, index) => {
                    return (
                      <li key={index} className="comment">
                        {comment.text}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row separation">
          <div className="col">
            <div className="center">
              <h6>Make a contribution towards saving this forest.</h6>
              <button onClick={e => handleDonation(e, forest)}>
                {" "}
                $1 <FontAwesomeIcon icon="gift" />
              </button>
              <button onClick={e => handleDonation(e, forest)}>
                {" "}
                $5 <FontAwesomeIcon icon="gift" />
              </button>
              <button onClick={e => handleDonation(e, forest)}>
                {" "}
                $10 <FontAwesomeIcon icon="gift" />
              </button>
            </div>
          </div>
          <div className="col center">
            <Donation donations={donations} forest={forest} />
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Display;
//
// forestDonations={forest.donations}
// <input
//   type="text"
//   value={this.state.comment}
//   onChange={this.handleChange}
//   />
// let commentList = [...this.state.commentList, this.state.comment];
// this.setState({ commentList });

// {forest.comments.map((comment, index) => {
//   return <li key={index}>{comment.text}</li>;
//   })}

// data => {
//   let commentList = data.filter(
//     data.endangered_habitat_id === forest.id
//   );
//   this.setState({ commentList });

// {commentList.map((comment, index) => {
//   return <li key={index}>{comment.text}</li>;
// })}

// if (forest !== null) {
//   let forestComments = commentList.filter(
//     comment => comment.endangered_habitat_id === forest.id
//   );
// }

// display div:
//<div className="display">
//   <h1>{forest.name}</h1>
//   <img src={forest.image} alt={forest.name} />
//   <Twitter hashtag={forest.name} />
//   <p>{forest.description}</p>
//   <FontAwesomeIcon
//     icon="star"
//     onClick={() => this.handleBookmark(forest)}
//   />
//   <div>
//     <h4>{`Share your thoughts about ${forest.name} below:`}</h4>
//     <input
//       type="text"
//       value={this.state.comment}
//       onChange={this.handleChange}
//     />
//     <button>
//       <FontAwesomeIcon
//         icon="pencil-alt"
//         onClick={() => this.handleClick(forest)}
//       />
//     </button>
//     <ul>
//       {commentList
//         .filter(comment => comment.endangered_habitat_id === forest.id)
//         .map((comment, index) => {
//           return <li key={index}>{comment.text}</li>;
//         })}
//     </ul>
//   </div>
//   <div>
//     <div>
//       <h6>Make a contribution towards saving this forest.</h6>
//       <button onClick={e => handleDonation(e, forest)}>
//         {" "}
//         $1 <FontAwesomeIcon icon="gift" />
//       </button>
//       <button onClick={e => handleDonation(e, forest)}>
//         {" "}
//         $5 <FontAwesomeIcon icon="gift" />
//       </button>
//       <button onClick={e => handleDonation(e, forest)}>
//         {" "}
//         $10 <FontAwesomeIcon icon="gift" />
//       </button>
//     </div>
//     <div>
//       <Donation
//         donations={donations}
//         forestDonations={forest.donations}
//       />
//     </div>
//   </div>
// </div>
