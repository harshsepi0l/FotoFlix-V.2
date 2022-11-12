import { deleteComment } from "../api";
import "../index.css";
import { CommentForm } from "./CommentForm";

export function Comment({ 
    comment, 
    replies, 
    currentUserId, 
    deleteComment, 
    activeComment, 
    addComment, 
    updateComment,
    setActiveComment, 
    parentId = null 
}: any): JSX.Element {
    const fiveminutes = 300000;
    const timePassed = new Date().getTime() - new Date(comment.createdAt).getTime() > fiveminutes;
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId && !timePassed;
    const canDelete = currentUserId === comment.userId && !timePassed;
    const createdAt = new Date(comment.createdAt).toLocaleString();
    const isReplying =
        activeComment && activeComment.type === 'replying' &&
        activeComment.id === comment.id;
    const isEditing =
        activeComment && activeComment.type === 'editing' &&
        activeComment.id === comment.id;
    const replyId = parentId ? parentId : comment.id;
    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src='user-icon.png' />
            </div>
            <div className="comment-right-part">
                <div className="comment-contaent">
                    <div className="commment-author">{comment.username}</div>
                    <div>{createdAt}</div>
                </div>
                {!isEditing && <div className="comment-text">{comment.body}</div>}
                {isEditing && (
                    <CommentForm 
                        submitLabel="Update" 
                        hasCancelButton 
                        initialText={comment.body}
                        handleSubmit={(text: any) => updateComment(text, comment.id)} 
                        handleCancel={() => setActiveComment(null)}
                    />)}
                <div className="comment-actions">
                    {canReply && (
                        <div
                            className="comment-action"
                            onClick={() => 
                                setActiveComment({ id: comment.id, type: "replying" })}
                        >
                            Reply
                        </div>
                    )}
                    {canEdit && (
                        <div
                            className="comment-action"
                            onClick={() => 
                                 setActiveComment({ id: comment.id, type: "editing" })}
                        >
                            Edit
                        </div>
                    )}
                    {canDelete && <div
                        className="comment-action"
                        onClick={() => deleteComment(comment.id)}>
                        Delete
                    </div>}
                </div>
                {isReplying && (
                    <CommentForm
                        submitLabel="Reply"
                        handleSubmit={(text: any) => addComment(text, replyId)}
                    />
                )}
    
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map((reply: any) => (
                            <Comment
                            comment={reply}
                            key={reply.id}
                            setActiveComment={setActiveComment}
                            activeComment={activeComment}
                            updateComment={updateComment}
                            deleteComment={deleteComment}
                            addComment={addComment}
                            parentId={comment.id}
                            replies={[]}
                            currentUserId={currentUserId}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}