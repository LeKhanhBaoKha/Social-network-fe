import Comment from "./Comment";

export default function CommentList({ comments }) {
  return comments.map((comment) => (
    <div className="flex" key={comment.id}>
      <Comment comment={comment}></Comment>
    </div>
  ));
}
