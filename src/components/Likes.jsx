import React, {useState} from 'react'

function Likes() {
    const [isLikeCounter, setisLikeCounter] = useState(0)
    const [isDislikeCounter, setisDislikeCounter] = useState(0)

    function handleLikeCounter() {
        let newLikeCounter = isLikeCounter
        newLikeCounter++;
        setisLikeCounter(newLikeCounter);
    }

    function handleDislikeCounter() {
        let newDislikeCounter = isDislikeCounter
        newDislikeCounter++;
        setisDislikeCounter(newDislikeCounter);
    }
    
    return(
        <div>
            <button onClick={handleLikeCounter}>{isLikeCounter}👍</button>
            <button onClick={handleDislikeCounter}>{isDislikeCounter}👎</button>
        </div>
    )
}

export default Likes;