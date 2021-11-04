import video from "../data/video.js";
import { useState } from 'react'
import Header from "./Header.js";
import Likes from './Likes';
import CommentList from "./CommentList.js";

function App() {
  // console.log("Here's your data:", video);
  const [isHideComment, setIsHideComment] = useState(false)

  function handleClick() {
    setIsHideComment(isHideComment => !isHideComment)
  }
  return (
    <div className="App">
      <Header video={video} />
      <Likes video={video} />
      <br />
      <button onClick={handleClick}>{isHideComment ? "Show Comment" : "Hide Comment"}</button>
      <hr />
      {!isHideComment ? <CommentList comments={video.comments} /> : null}
    </div>
  )
}

export default App;
