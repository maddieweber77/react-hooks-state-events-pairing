import React from 'react';

function Comment({key, user, commentPost, comments}) {
   
    
    return(
         <div>
            <p><strong>{user}: </strong>{commentPost}</p>
         </div>
    )
}

export default Comment;