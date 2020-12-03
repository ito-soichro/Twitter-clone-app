import React, { useState } from 'react';
import "./PostLists.css";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import PublishIcon from '@material-ui/icons/Publish';
import { Avatar } from "@material-ui/core";


function PostLists({title}) {
  const [liked, setLike] = useState(false);
  const toggleLike = React.useCallback(() => setLike((prev) => !prev), [setLike]);
  return(
    <div className="post" >
      <div className="post__avatar">
      <Avatar src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667" />
    </div>
    <div className="post__body">
      <div className="post__header">
        <div className="post__headerText">
          <h3>
            React {" "}
            <span className="post__headerSpecial">
              <VerifiedUserIcon className="post__badge" />
              @JavaScript
            </span>
          </h3>
        </div>
      </div>
      <div className="post__text">{title}</div>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <span className="post__like" onClick={toggleLike}>{liked ? '❤️' : '♡'}</span>
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  )
}

export default PostLists;
  