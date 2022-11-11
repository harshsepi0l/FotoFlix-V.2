import { useEffect, useState } from "react";
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    deleteComment as deleteCommentApi
} from "../api";
import { Comment } from './Comment';
import "../index.css";
import { CommentForm } from "./CommentForm";

export function Comments({ currentUserId }: any): JSX.Element {
    const [backendComments, setBackendComments] = useState<any>([]);
    const [activeComment, setActiveComment] = useState<any>(null)
    const rootComments = backendComments.filter((backendComment: any) => backendComment.parentId === null);
    console.log("backendComments", backendComments);

    const getReplies = (commentId: any) => {
        return backendComments
            .filter((backendComment: any) => backendComment.parentId === commentId)
            .sort((a: any, b: any) =>
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
    }

    const addComment = async (text: any, parentId: any) => {
        console.log('addComment', text, parentId);
        const comment = await createCommentApi(text, parentId);
        setBackendComments([comment, ...backendComments]);
        setActiveComment(null);
    };

    const deleteComment = async (commentId: any) => {
        if (window.confirm('Are you sure that you want to remove comment?')) {
            await deleteCommentApi();
            const updatedBackendComments = backendComments.filter(
                (backendComment: any) => backendComment.id !== commentId
            );
            setBackendComments(updatedBackendComments);
        }

    }

    useEffect(() => {
        getCommentsApi().then((data: any) => {
            setBackendComments(data);
        });
    }, []);
    return (
        <div className="comments">
            <h3 className="comments__title">Comments</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm 
                submitLabel="Write" 
                handleSubmit={addComment} />
            <div className="comments-container">
                {rootComments.map((rootComment: any) => (
                    <Comment
                        key={rootComment.id}
                        comment={rootComment}
                        replies={getReplies(rootComment.id)}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                        deleteComment={deleteComment}
                        currentUserId={currentUserId}
                    />
                ))}
            </div>
        </div>
    )
}       