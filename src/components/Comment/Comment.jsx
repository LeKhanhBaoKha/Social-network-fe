import { useEffect, useRef, useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import threedot from "../../assets/svg/Chatbox/ThreeDot.svg";
import useFetchChildComment from "../../api/comment/GetChildComment";
import APIComment from "../../api/comment/APIComment";
import ThreeDotComment from "../ThreedotButton/ThreedotButtonComment";
export default function Comment({
  commentData,
  depth = 0,
  setComments,
  ListOfComments,
  user,
  children,
}) {
  // console.log("commentData", commentData);
  const [childComment, setChildComment] = useState(children);
  // console.log("children in comment", children);
  // const [newComment, setNewComment] = useState([]);
  // console.log("new comment", newComment);
  const [comment, setComment] = useState(commentData);
  const [edit, setEdit] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [text, setText] = useState(comment?.content);
  const [isReplying, setIsReplying] = useState(false);

  const textareaRef = useRef(null);
  const maxHeight = 80;
  const handleInput = (e) => {
    setText(e.target.value);
    autoResize();
  };
  const autoResize = () => {
    if (comment != null) {
      const textarea = textareaRef?.current;
      textarea.style.height = "50px";
      const newHeight = textarea?.scrollHeight;
      if (newHeight < maxHeight) {
        textarea.style.height = `${newHeight}px`;
      } else {
        textarea.style.height = `${maxHeight}px`;
        textarea.style.overflowY = "auto"; // Add scroll if maxHeight is reached
      }
    }
  };

  useEffect(() => {
    autoResize();
  }, [text]);

  const CommentOptions = [
    {
      name: "Chỉnh sửa",
      key: "edit",
    },
    {
      name: "Xóa Bình luận",
      key: "delete",
    },
  ];
  if (childComment) {
    console.log("childcomment", childComment);
    console.log(comment?.parent_id);
    console.log(comment?.post_id);
    console.log("depth", depth);
  }
  return (
    <>
      {comment != null && (
        <div className="flex flex-col w-full ">
          <div className="flex">
            {/* postUser */}
            <div className=" flex justify-between ml-[12px] mt-[15px]">
              <div className="flex">
                <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-100">
                  <img
                    className=""
                    src={comment?.user?.avatar}
                    alt="ảnh đại diện"
                  ></img>
                </div>
              </div>
            </div>
            {/* end postUser */}
            {/* reply text */}
            <div className="mt-[10px]">
              <p className="text-lg font-semibold">{comment?.user?.username}</p>
              <div className="flex w-[900px] flex-row items-center gap-[20px] group">
                <textarea
                  ref={textareaRef}
                  value={text}
                  readOnly
                  onChange={handleInput}
                  className="p-2 w-[400px] max-w-[500px] text-base border border-gray-300 focus:outline-none bg-purple-50 rounded-xl resize-none "
                ></textarea>
                <div className="hidden group-hover:flex">
                  <ThreeDotComment
                    setEdit={setEdit}
                    options={CommentOptions}
                    comment={comment}
                    setComment={setComment}
                  ></ThreeDotComment>
                </div>
              </div>

              {comment?.image != null && (
                <div className="mt-[10px] ">
                  <img
                    className="rounded-xl max-w-[450px]"
                    src={comment?.image}
                    alt=""
                  />
                </div>
              )}

              {/* comment-button */}
              <div className="flex gap-[10px]">
                <p className="text-gray-500 hover:cursor-pointer">Thích</p>
                {!isReplying && (
                  <p
                    onClick={() => {
                      setIsReplying(true);
                      setEdit(false);
                    }}
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
                {edit == true && (
                  <p
                    onClick={() => setEdit(false)}
                    className="text-gray-500 hover:cursor-pointer"
                  >
                    Hủy
                  </p>
                )}
              </div>
              {/* end-comment-button */}
            </div>
            {/* end reply text */}
          </div>
          {edit == true && (
            <div className="pt-[10px] pl-[20px] border-l-[4px] translate-x-[8%] ">
              <CommentForm
                updateEdit={setText}
                setEdit={setEdit}
                ListOfComments={ListOfComments}
                setComments={setComments}
                isReplying={isReplying}
                commentData={comment}
                commentWidth="w-[400px]"
                setComment={setComment}
              ></CommentForm>
            </div>
          )}

          {isReplying && (
            <div className="pt-[10px] pl-[20px] border-l-[4px] translate-x-[8%] ">
              <CommentForm
                userData={user}
                ListOfComments={childComment}
                setComments={setChildComment}
                setIsReplying={setIsReplying}
                isReplying={isReplying}
                commentData={comment}
                commentWidth="w-[400px]"
              ></CommentForm>
            </div>
          )}

          {childComment?.length > 0 && showReply == true && (
            <div
              className={` ${
                depth < 3 ? "pt-[10px] border-l-[4px] translate-x-[8%]" : ""
              }`}
            >
              {/* border-l border-b   translate-y-[-50%]  translate-x-[0%] */}
              <CommentList
                commentsData={childComment}
                depth={depth + 1}
              ></CommentList>
            </div>
          )}
        </div>
      )}
    </>
  );
}
