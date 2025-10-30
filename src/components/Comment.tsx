import type { CommentPropTypes } from "../utils/types";

export default function Comment({ content, userId }: CommentPropTypes) {
  return (
    <div className="flex flex-row gap-1">
      <p>{userId}:</p>
      <p>{content}</p>
    </div>
  );
}
