import { useEffect, useRef, useState } from "react";
import CommentList from "./CommentList";
import CommentFrom from "./CommentFrom";

export default function Comment({ comment }) {
  const [childComment, setChildComment] = useState(null);
  const [text, setText] = useState(comment.content);
  const [showReply, setShowReply] = useState(false);
  const [isReplying, setIsReplying] = useState(false);

  const textareaRef = useRef(null);
  const maxHeight = 80;
  const handleInput = (e) => {
    setText(e.target.value);
    autoResize();
  };
  const autoResize = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "50px";
    const newHeight = textarea.scrollHeight;
    if (newHeight < maxHeight) {
      textarea.style.height = `${newHeight}px`;
    } else {
      textarea.style.height = `${maxHeight}px`;
      textarea.style.overflowY = "auto"; // Add scroll if maxHeight is reached
    }
  };

  useEffect(() => {
    autoResize();
  }, [text]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/comment/getchild/${comment.id}/${comment.post_id}`
        );
        if (!response.ok) {
          throw new Error(`Error status" ${response.status}`);
        }
        const result = await response.json();
        setChildComment(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
  if (childComment) {
    console.log("childcomment", childComment);
    console.log(comment.parent_id);
    console.log(comment.post_id);
  }
  return (
    <>
      <div className="flex flex-col w-full ">
        <div className="flex">
          {/* postUser */}
          <div className=" flex justify-between ml-[12px] mt-[15px]">
            <div className="flex">
              <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-100">
                <img
                  className=""
                  src={comment.user.avatar}
                  alt="ảnh đại diện"
                ></img>
              </div>
            </div>
          </div>
          {/* end postUser */}
          {/* reply text */}
          <div className="mt-[10px]">
            <p className="text-lg font-semibold">{comment.user.username}</p>
            <textarea
              ref={textareaRef}
              value={text}
              onChange={handleInput}
              className="p-2 w-[400px] max-w-[500px] text-base border border-gray-300 focus:outline-none bg-purple-50 rounded-xl resize-none pointer-events-none"
            ></textarea>

            {/* comment-button */}
            <div className="flex gap-[10px]">
              <p className="text-gray-500 hover:cursor-pointer">Thích</p>
              {!isReplying && (
                <p
                  onClick={() => setIsReplying(true)}
                  className="text-gray-500 hover:cursor-pointer"
                >
                  Trả lời
                </p>
              )}
              {isReplying && (
                <p
                  onClick={() => setIsReplying(false)}
                  className="text-gray-500 hover:cursor-pointer"
                >
                  Hủy
                </p>
              )}
              {childComment?.length > 0 && (
                <div>
                  <p
                    onClick={() => setShowReply(true)}
                    className={`text-gray-500 hover:cursor-pointer ${
                      showReply ? "hidden" : ""
                    }`}
                  >
                    Hiển thị trả lời
                  </p>
                  <p
                    onClick={() => setShowReply(false)}
                    className={`text-gray-500 hover:cursor-pointer ${
                      showReply ? "" : "hidden"
                    }`}
                  >
                    Ẩn trả lời
                  </p>
                </div>
              )}
            </div>
            {/* end-comment-button */}
          </div>
          {/* end reply text */}
        </div>
        {isReplying && (
          <div className="pt-[10px] pl-[20px] border-l-[4px] translate-x-[8%] ">
            <CommentFrom></CommentFrom>
          </div>
        )}
        {childComment?.length > 0 && showReply == true && (
          <div className="pt-[10px] border-l-[4px] translate-x-[8%] ">
            {/* border-l border-b   translate-y-[-50%]  translate-x-[0%] */}
            <CommentList comments={childComment}></CommentList>
          </div>
        )}
      </div>
    </>
  );
}
