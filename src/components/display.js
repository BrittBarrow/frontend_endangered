import React from "react";
import Twitter from "./twitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Donation from "./donation";
import "../css/display.css";

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
              <h2 style={{ fontSize: "20px", textAlign: "center" }}>
                {forest.name}
              </h2>
              <p style={{ fontSize: "17px" }}>{forest.description}</p>
            </div>
          </div>
          <div className="row separation">
            <div className="col">
              <Twitter hashtag={forest.name} />
            </div>
            <div className="col">
              <h4 style={{ fontSize: "18px" }}>{`Share your thoughts about ${
                forest.name
              } below:`}</h4>
              <p style={{ color: "red", fontSize: "16px" }}>
                {this.state.error}
              </p>
              <textarea
                cols="50"
                rows="15"
                style={{ fontSize: "16px" }}
                tabIndex="101"
                value={this.state.comment}
                onChange={this.handleChange}
              />
              <button className="pencil">
                <FontAwesomeIcon
                  icon="pencil-alt"
                  onClick={() => this.handleClick(forest)}
                />
              </button>
            </div>
            <div className="col">
              <p style={{ fontSize: "16px" }}>What's Being Said &#8628;</p>
              <ul>
                {commentList
                  .filter(
                    comment => comment.endangered_habitat_id === forest.id
                  )
                  .map((comment, index) => {
                    return (
                      <li
                        key={index}
                        className="comment"
                        style={{ fontSize: "16px" }}
                      >
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
            <div className="money center" style={{ fontSize: "16px" }}>
              <h6 style={{ fontSize: "16px" }}>
                Make a contribution towards saving this forest.
              </h6>
              <button
                className="btn btn-primary btn-lg m-2"
                onClick={e => handleDonation(e, forest)}
              >
                {" "}
                $1 <FontAwesomeIcon icon="gift" />
              </button>
              <button
                className="btn btn-primary btn-lg m-2 "
                onClick={e => handleDonation(e, forest)}
              >
                {" "}
                $5 <FontAwesomeIcon icon="gift" />
              </button>
              <button
                className="btn btn-primary btn-lg m-2"
                onClick={e => handleDonation(e, forest)}
              >
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
