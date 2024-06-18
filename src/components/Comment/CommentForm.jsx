import { useEffect, useRef, useState } from "react";
import send from "../../assets/svg/Chatbox/send.svg";
import { Emoji } from "emoji-picker-react";
import EmojiWindow from "../CreatePost/EmojiPicker";
import APIComment from "../../api/comment/APIComment";
import { NotificationManager } from "react-notifications";
export default function CommentForm({
  commentData,
  commentWidth,
  isReplying,
  setIsReplying,
  updateEdit,
  setEdit,
  setComments,
  ListOfComments,
  setParentComment,
  setCommentListKey,
  userData,
  post,
}) {
  const [width, setWidth] = useState(commentWidth);
  const [comment, setComment] = useState(commentData);
  const [isEdit, setIsEdit] = useState(
    isReplying !== true ? comment?.content : null
  );
  console.log("Comment data", comment);
  console.log("isEdit", isEdit);
  console.log("isreply", isReplying !== true ? comment?.content : null);
  const [data, setData] = useState({
    post_id: null,
    parent_id: null,
    content: null,
  });
  const [text, setText] = useState(
    isReplying !== true ? comment?.content : null
  );
  const [chosenEmoji, setChosenEmoji] = useState(null);
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
  const handleSendingData = () => {
    if (isEdit == null) {
      const commentData = {
        user_id: comment.user_id,
        user: comment.user,
        post_id: comment.post_id,
        id: comment.id,
        parent_id: comment.id ?? null,
        content: text,
      };
      setData(commentData);
      console.log("set create data", commentData);
    } else {
      const commentData = {
        user_id: comment.user_id,
        user: userData,
        post_id: comment.post_id,
        parent_id: comment.id ?? null,
        id: comment.id,
        content: text,
      };
      setData(commentData);
      console.log("set edit data", commentData);
    }
  };

  useEffect(() => {
    async function sendData() {
      try {
        if (isEdit == null) {
          const response = await APIComment.createComment(data);
          if (response?.data?.meta?.statusCode === 200) {
            NotificationManager.success(response?.data?.meta?.message);
            setComments([...ListOfComments, data]);
            setIsReplying(false);

            // setNewComment(response?.data?.data);
            // const fetchParent = async () => {
            //   try {
            //     const response = await APIComment.getParentComment(post.id);
            //     // Access the data from the response
            //     setParentComment(response.data.data);
            //   } catch (error) {
            //     console.error("Error:", error);
            //   }
            // };
            // fetchParent();
          } else {
            NotificationManager.error(response?.data?.meta?.message);
          }
        } else {
          const response = await APIComment.edit(data);
          if (response?.data?.meta?.statusCode === 200) {
            NotificationManager.success(response?.data?.meta?.message);
            // setComments([...ListOfComments, data]);
            updateEdit(data.content);
            setEdit(false);
          } else {
            NotificationManager.error(response?.data?.meta?.message);
          }
        }
      } catch (error) {
        // NotificationManager.error(error?.response?.data?.meta?.message);
        console.error("Error:", error);
      }
    }
    if (data.content) {
      sendData();
      // setOpenEdit(false);
    }
  }, [data]);

  useEffect(() => {
    autoResize();
  }, [text]);

  useEffect(() => {
    const handleEmojiSelect = () => {
      setText((prevText) => prevText + chosenEmoji?.emoji);
    };
    if (text != null && chosenEmoji != null) {
      handleEmojiSelect();
    }
  }, [chosenEmoji]);

  return (
    <div className="flex gap-[10px] items-center min-h-[50px]">
      <textarea
        autoFocus
        ref={textareaRef}
        value={text}
        onChange={handleInput}
        className={`p-2 ${width} h-[50px] max-w-[650px] text-base border border-gray-300 focus:outline-none bg-purple-50 rounded-xl resize-none`}
        // className="p-2 w-[400px] max-w-[500px] text-base border border-gray-300 focus:outline-none bg-purple-50 rounded-xl resize-none"
      ></textarea>
      <div className="translate-x-[-200%]">
        <EmojiWindow setEmoji={setChosenEmoji}></EmojiWindow>
      </div>
      <div
        onClick={() => handleSendingData()}
        className="p-2 rounded-full hover:bg-slate-100 hover:cursor-pointer transition-colors translate-x-[-80%]"
      >
        <img className="translate-x-[10%]" src={send} alt="" />
      </div>
    </div>
  );
}
