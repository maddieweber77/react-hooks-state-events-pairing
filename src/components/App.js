import React from 'react'
import video from "../data/video.js";
import Likes from "./Likes.jsx"
import Comments from "./Comments.jsx"


function App() {
  console.log("Here's your data:", video);

  let comments = video.comments

  console.log("Here's your comments:", comments);
  

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <Likes/>
      <Comments comments={comments} video={video}/>
    </div>
  );
}

export default App;
