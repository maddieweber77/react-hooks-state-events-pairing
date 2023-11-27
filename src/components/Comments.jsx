import React, {useState} from 'react';
import Comment from './Comment';

function Comments({comments, video}) {

    //states have to be in parent file
    const [isHidden, setIsHidden] = useState(true);

    function hideCommHandler() {
        setIsHidden(!isHidden)
    }
    
    function countComments(video) {
        if (video.comments && Array.isArray(video.comments)) {
          return video.comments.length;
        } else {
          return 0;
        }
      }
      
      const numberOfComments = countComments(video);


    return (
       <div>
        <h3>{numberOfComments} Comments</h3>
        <button onClick={hideCommHandler}> {isHidden ? 'Show Comments' : 'Hide Comments' }</button> 
        {isHidden ? null : <div className="comments-container">
        {comments.map((comment) => (
            <Comment
              key={comment.user}
              user={comment.user}
              commentPost = {comment.comment}
              comments={comments}
            />
          ))}
          </div>
}
        </div>
    )
}

export default Comments;