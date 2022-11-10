import { useEffect, useState } from "react";
import { getComments as getCommentsApi } from "../api";
import { Comment } from './Comment';
import "../index.css";

export function Comments({ currentUserId }): JSX.Element {
    const [backendComments, setBackendComments] = useState([]);
    const rootComments = backendComments.filter((backendComment: any) => backendComment.parentId === null);
    console.log("backendComments", backendComments);

    useEffect(() => {
        getCommentsApi().then((data: any) => {
            setBackendComments(data);
        });
    }, []);
    return (
        <div className="comments">
            <h3 className="comments__title">Comments</h3>
            <div className="comments-container">
                {rootComments.map((rootComment: any) => (
                    <Comment key={rootComment.id} comment={rootComment}/>
                ))}
            </div>
        </div>
    )
}       