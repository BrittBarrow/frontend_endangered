import React from "react";

class Twitter extends React.Component {
  render() {
    let { hashtag } = this.props;
    return (
      <div>
        <a
          class="twitter-timeline"
          href="https://twitter.com/BarrowBritt/timelines/1038958043344658432?ref_src=twsrc%5Etfw"
        >
          Amazon - Curated tweets by BarrowBritt
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        />
        <p>{`This will be twitter feed for ${hashtag}.`}</p>
      </div>
    );
  }
}

export default Twitter;
