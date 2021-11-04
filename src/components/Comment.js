function Comment({comment, user}) {
    return (
        <>
            <p><strong>{user}</strong></p>
            <p>{comment}</p>
        </>
    )
}

export default Comment