import { Comments } from "./comments/Comments";

export function CommentSection(avatar: any, content: []): JSX.Element {
  return (
    <>
      <Comments currentUserId="1"></Comments>
    </>
  );
};

