import React from "react";

class Twitter extends React.Component {
  render() {
    let { hashtag } = this.props;
    return (
      <div>
        <p>{`This will be twitter feed for ${hashtag}.`}</p>
      </div>
    );
  }
}

export default Twitter;
