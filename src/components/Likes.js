import { useState } from 'react'

function Likes({ video }) {
    const [likes, setLikes] = useState(video.upvotes)
    const [disLikes, setDisLikes] = useState(video.downvotes)

    function handleClick() {
        setLikes(likes => likes + 1)
    }

    function handleDisLikesClick() {
        setDisLikes(disLikes - 1)
    }
    return (
        <div>
            <button onClick={handleClick}>{likes} 👍</button>
            <button onClick={handleDisLikesClick}>{disLikes} 👎</button>
        </div>
    )
}

export default Likes