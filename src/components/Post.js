import React from 'react'
import './Post.css'
import PostLists from "./PostLists.js"
import { useRecoilState } from 'recoil';
import textState from '../textState.js'


function Post() {
  const [post, setPost] = useRecoilState(textState);
  return (
    <div className="post" >
      <div className="post__headerDescription">
        <p>
          {post.map(todo => (
            <PostLists
              key={todo.title}
              title={todo.title}
            />
          ))} 
        </p>
      </div>
    </div>
  )
}

export default Post
