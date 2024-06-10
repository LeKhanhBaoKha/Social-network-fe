import Comment from "./Comment";

export default function CommentList({ comments, depth }) {
  return comments.map((comment) => (
    <div className="flex" key={comment.id}>
      <Comment comment={comment} depth={depth}></Comment>
    </div>
  ));
}
