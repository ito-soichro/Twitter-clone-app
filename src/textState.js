import {
  atom,
} from 'recoil';

//  ローカルストレージ => リコイル
const textState = atom ({
  key: 'setTweet', 
  default: JSON.parse(localStorage.getItem("todoList")) || [],
});

export default textState
