import React,{ useEffect } from 'react'
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
import { useRecoilState } from 'recoil';
import textState from '../textState.js'

function TweetBox() {
   const [tweet, setTweet] = useRecoilState(textState);
 　const addTodo = (item, callBack) => {
    setTweet(tweet.concat(item),
    callBack && callBack()
    )
  }
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(tweet))
  });
  return (
    <div className="tweetBox">
      <div className="tweetBox__input">
        <form
          className="tweetBox__input"
          onSubmit={e => {
            e.preventDefault();
            const titleElement = e.target.elements["title"]
            addTodo(
              {title: titleElement.value,},
              () => {
                titleElement.value = "";
              }
            )
          }}
        >
        <div className="tweetBox__input">
          <Avatar src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667" />
          <input
            id="title"
            placeholder="今何してる?"
            type="text"
          />
        </div>
        <Button
          type="submit"
          className="tweetBox__tweetButton"
          >
        Tweet</Button>
        </form>
      </div>
    </div>
  )
}

export default TweetBox;
