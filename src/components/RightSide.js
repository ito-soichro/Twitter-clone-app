import React from 'react'
import "./RightSide.css"
import SearchIcon from '@material-ui/icons/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="Widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="検索" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>今どうしてる？</h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="pasha_117"
          options={{ height: 400 }}
        />
         <TwitterShareButton
            url={'https://facebook.com/saurabhnemade'}
            options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
          />
      </div>
    </div>
  )
}

export default Widgets
