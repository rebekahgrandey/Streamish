const Comment = ({ comment }) => {
    return (
        <div>
            <h4>{comment.userProfile.name}</h4>
            <div>{comment.message}</div>
        </div>
    )
}

export default Comment