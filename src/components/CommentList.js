import Comment from './Comment'

function CommentList({comments}) {
    return (
        <div>
            {comments.map(comment => <Comment user={comment.user} comment={comment.comment} key={comment.id} />)}
        </div>
    )
}

export default CommentList