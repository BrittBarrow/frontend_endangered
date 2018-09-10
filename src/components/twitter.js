import React from "react";
import { Timeline } from "react-twitter-widgets";

class Twitter extends React.Component {
  render() {
    let { hashtag } = this.props;

    let screenName;

    if (hashtag === "Amazon") screenName = "saveamazon";
    if (hashtag === "Atlantic Forest/Gran Chaco")
      screenName = "WWFForestCarbon";
    if (hashtag === "Borneo") screenName = "borneoaction";
    if (hashtag === "Cerrado") screenName = "proforest";
    if (hashtag === "Choco-Darien") screenName = "WWFForestCarbon";
    if (hashtag === "Congo Basin") screenName = "cbfp_pfbc";
    if (hashtag === "Eastern Africa") screenName = "FAOEastAfrica";
    if (hashtag === "Eastern Australia") screenName = "FSCaustralia";
    if (hashtag === "Greater Mekong") screenName = "WWFMekong";
    if (hashtag === "New Guinea") screenName = "FAOForestry";
    if (hashtag === "Sumatra") screenName = "WWFForestCarbon";

    return (
      <div>
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: screenName
          }}
          options={{
            username: "saveamazon",
            height: "350"
          }}
          onLoad={() => console.log("Timeline is loaded")}
        />
      </div>
    );
  }
}

export default Twitter;
