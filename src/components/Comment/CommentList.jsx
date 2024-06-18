import { useEffect, useState } from "react";
import Comment from "./Comment";

export default function CommentList({ commentsData, depth }) {
  const [comments, setComments] = useState(commentsData);
  useEffect(() => {
    setComments(commentsData);
  }, [commentsData]);
  return (
    <>
      {/* <Comment depth={depth} commentData={newComment}></Comment> */}
      {comments.map((comment) => (
        <div className="flex" key={comment.id}>
          <Comment
            ListOfComments={comments}
            setComments={setComments}
            children={comment.children}
            user={comment.user}
            // setNewComment={setNewComment}
            commentData={comment}
            depth={depth}
          ></Comment>
        </div>
      ))}
    </>
  );
}
