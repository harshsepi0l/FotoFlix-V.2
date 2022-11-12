import { useState } from "react";
import "../index.css";

export function CommentForm({
    handleSubmit,
    submitLabel,
    hasCancelButton = false,
    initialText = "",
    handleCancel }: any): JSX.Element {
    const [text, setText] = useState(initialText);
    const isTextareaDisabled = text.length === 0;
    const onSubmit = (event: any) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    }
    return (
        <form className="comment-form-container" onSubmit={onSubmit}>
            <textarea
                className="comment-form-textarea"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button className="comment-form-button" disabled={isTextareaDisabled}>
                {submitLabel}
            </button>
            {hasCancelButton && (
                <button
                    type="button"
                    className="comment-form-button comment-form-cancel-button"
                    onClick={handleCancel}>
                    Cancel
                </button>
            )}
        </form>
    )
}