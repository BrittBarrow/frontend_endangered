import React from "react";
import Twitter from "./twitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Modal from "react-awesome-modal";

class Display extends React.Component {
  state = {
    comment: "",
    commentList: null
  };

  componentDidMount() {
    this.getFetch();
  }
  // let commentList = data.filter(
  //   data.endangered_habitat_id === forest.id
  // );
  // this.setState({ commentList: commentList });

  // console.log(forest);
  getFetch = () => {
    let { forest } = this.props;
    forest !== null
      ? fetch(`http://localhost:3000/api/v1/comments`)
          .then(resp => resp.json())
          .then(data => {})
      : null;
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
      .then(data => console.log(data));
  };

  handleDonation = e => {
    let donation = e.target.innerText;
    console.log(donation);
  };

  handleBookmark = forest => {
    console.log("This forest needs to be added to users list:", forest);
  };

  // let { commentList } = this.state;
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
            <FontAwesomeIcon
              icon="pencil-alt"
              onClick={() => this.handleClick(forest)}
            />
          </button>
          <ul>
            {commentList !== null
              ? commentList.map(comment => {
                  return <li>{comment.text}</li>;
                })
              : null}
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

// let commentList = [...this.state.commentList, this.state.comment];
// this.setState({ commentList });

// {forest.comments.map((comment, index) => {
//   return <li key={index}>{comment.text}</li>;
//   })}
