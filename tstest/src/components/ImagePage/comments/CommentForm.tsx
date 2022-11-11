import { useState } from "react";
import "../index.css";

export function CommentForm({ handleSubmit, submitLable }: any): JSX.Element {
    const [text, setText] = useState("");
    const isTextareaDisabled = text.length === 0;
    const onSubmit = (event: any) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    }
    return (
        <form onSubmit={onSubmit}>
            <textarea
                className="comment-form-textarea"
                value={text}
                onChange={(event) => setText(event.target.value)} 
            />
            <button className="comment-form-button" disabled={isTextareaDisabled}>
                {submitLable}
            </button>
        </form>
    )
}