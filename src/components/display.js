import React from "react";
import Twitter from "./twitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Donation from "./donation";
// import Modal from "react-awesome-modal";

class Display extends React.Component {
  state = {
    comment: "",
    commentList: []
  };
  //
  // let { forest } = this.props;
  // forest !== null ? this.getFetch() : null;
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

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(data => {
        let commentList = [...this.state.commentList, data];
        this.setState({ commentList, comment: "" });
      });
  };

  // handleDonation = e => {
  //   let donation = e.target.innerText;
  //   console.log(donation);
  // };

  handleBookmark = forest => {
    console.log("This forest needs to be added to users list:", forest);
  };

  // let { commentList } = this.state;
  render() {
    let { forest, donations, handleDonation } = this.props;
    let { commentList } = this.state;

    console.log(donations);
    return forest !== null ? (
      <div>
        <h1>{forest.name}</h1>
        <img src={forest.image} alt={forest.name} />
        <Twitter hashtag={forest.name} />
        <p>{forest.description}</p>
        <FontAwesomeIcon
          icon="star"
          onClick={() => this.handleBookmark(forest)}
        />
        <div>
          <h4>{`Share your thoughts about ${forest.name} below:`}</h4>
          <input
            type="text"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <button>
            <FontAwesomeIcon
              icon="pencil-alt"
              onClick={() => this.handleClick(forest)}
            />
          </button>
          <ul>
            {commentList
              .filter(comment => comment.endangered_habitat_id === forest.id)
              .map((comment, index) => {
                return <li key={index}>{comment.text}</li>;
              })}
          </ul>
        </div>
        <div>
          <div>
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
          <div>
            <Donation
              donations={donations}
              forestDonations={forest.donations}
            />
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Display;

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
