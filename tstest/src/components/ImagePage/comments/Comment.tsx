export function Comment({comment}): JSX.Element {
    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src='https://joeschmoe.io/api/v1/random'/>
            </div>
            <div className="comment-right-part">
                <div className="comment-contaent">
                    <div className="commment-author">{comment.username}</div>
                    <div>{comment.createdAt}</div>
                </div>
                <div className="comment-text">{comment.body}</div>
            </div>
        </div>
    )
}