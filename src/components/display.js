import React from "react";
import Twitter from "./twitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Modal from "react-awesome-modal";

class Display extends React.Component {
  state = {
    comment: "",
    commentList: []
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleClick = () => {
    let commentList = [...this.state.commentList, this.state.comment];
    this.setState({ commentList });
  };

  handleDonation = e => {
    let donation = e.target.innerText;
    console.log(donation);
  };

  handleBookmark = forest => {
    console.log("This forest needs to be added to users list:", forest);
  };

  render() {
    let { forest } = this.props;
    let { commentList } = this.state;

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
          <input type="text" onChange={this.handleChange} />
          <button>
            <FontAwesomeIcon icon="pencil-alt" onClick={this.handleClick} />
          </button>
          <ul>
            {commentList.map((comment, index) => {
              return <li key={index}>{comment}</li>;
            })}
          </ul>
        </div>
        <div>
          <h6>Make a contribution towards saving this forest.</h6>
          <button onClick={this.handleDonation}>
            {" "}
            $1 <FontAwesomeIcon icon="gift" />
          </button>
          <button onClick={this.handleDonation}>
            {" "}
            $5 <FontAwesomeIcon icon="gift" />
          </button>
          <button onClick={this.handleDonation}>
            {" "}
            $10 <FontAwesomeIcon icon="gift" />
          </button>
        </div>
      </div>
    ) : null;
  }
}

export default Display;
