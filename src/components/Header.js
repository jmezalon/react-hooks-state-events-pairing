function Header({video}) {
    return(
        <>
            <iframe
                width="919"
                height="525"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <em>{video.views} views | Uploaded {video.createdAt}</em>
        </>
    )
}

export default Header