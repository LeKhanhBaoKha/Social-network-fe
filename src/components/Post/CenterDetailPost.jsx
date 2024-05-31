import { format } from "date-fns";
import ThreeDot from "../../assets/svg/ThreeDot.svg";
import send from "../../assets/svg/Chatbox/send.svg";
import { useEffect, useRef, useState } from "react";
import CommentList from "../Comment/CommentList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import CommentButton from "../../assets/svg/CommentButton.svg";
import LikeButton from "../../assets/svg/LikeButton.svg";
import SaveButton from "../../assets/svg/SaveButton.svg";
import ShareButton from "../../assets/svg/ShareButton.svg";
export default function CenterDetailPost({ post, changeLanguage }) {
  const [comments, setComments] = useState();
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const maxHeight = 80;
  const handleInput = (e) => {
    setText(e.target.value);
    autoResize();
  };

  useEffect(() => {
    textareaRef.current.focus();
  }, []);
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
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/comment/getparent/${post.id}`
        );
        if (!response.ok) {
          throw new Error(`Error status" ${response.status}`);
        }
        const result = await response.json();
        setComments(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  if (comments != null) {
    console.log(comments);
  }
  useEffect(() => {
    autoResize();
  }, [text]);

  return (
    <div className="justify-center w-[920px] max-h-[560px] flex flex-col rounded-lg">
      {/* header */}
      <div className="text-center">
        <p className="font-semibold text-lg p-4 border-b">
          Bài viết của {post.user.username}
        </p>
      </div>
      {/* end-header */}
      {/* content */}
      <div className="flex flex-col w-w-[920px] overflow-auto">
        {/* postUser */}
        <div className=" flex justify-between ml-[12px] mt-[11px]">
          <div className="flex">
            <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-100">
              <img className="" src={post.user.avatar} alt="ảnh đại diện"></img>
            </div>

            <div className="my-[10px] flex flex-col">
              <p className="">{post.user.username}</p>
              <p className="text-sm text-[#66676B]">
                {changeLanguage(
                  format(post.created_at, "d   MMMM yyyy, h:mm a")
                )}
              </p>
            </div>
          </div>
          <div className="">
            <img className="mt-[38px] mr-[35px]" src={ThreeDot} alt="" />
          </div>
        </div>
        {/* end postUser */}
        {/* textContent */}
        <div className="max-h-[80px] mx-[20px] mb-[10px]">
          <p>{post.post_text}</p>
        </div>
        {/* endtextContent */}

        {/* file-content */}
        <div className="flex justify-center w-full max-h-[400px]">
          <img className="" src={post.post_file} alt="content"></img>
        </div>
        {/* end-file-content */}

        {/* reatcions */}
        <div className="mt-[10px] reaction flex flex-row text-[#66676B] justify-between mx-[17px] pb-[9px] border-b">
          <div className="flex">
            {/* {reactions.map(({ name, svg }) => ( */}
            <div>
              <img src="" alt=""></img>
            </div>
            {/*   ))} */}
            <p className="text-sm mt-[1px]"></p>
          </div>
          <p className="text-sm mt-[px]">
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faShare} />
          </p>
        </div>
        {/* end reactions */}

        {/* button */}

        <div className="button h-[44px] flex justify-around text-[#66676B] mx-[17px] mt-[10px]">
          <div className="w-[160px] h-[36px] mt-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
            <button className="flex flex-row gap-[5px]">
              <img className="mt-[5px]" src={LikeButton} alt=""></img>
              <p className="text-lg font-semibold mt-[1px]">Thích</p>
            </button>
          </div>

          <div className="w-[160px] h-[36px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
            <button className="flex flex-row gap-[5px]">
              <img
                className="text-lg mt-[8px]"
                src={CommentButton}
                alt=""
              ></img>
              <p className="text-lg font-semibold mt-[1px]">Bình luận</p>
            </button>
          </div>

          <div className="w-[160px] h-[36px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
            <button className="flex flex-row gap-[5px]">
              <img className="mt-[5px]" src={ShareButton} alt=""></img>

              <p className="text-lg font-semibold mt-[1px]">Chia sẻ</p>
            </button>
          </div>
          <div className="w-[160px] h-[36px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
            <button className="flex flex-row gap-[5px] ">
              <img className="mt-[8px]" src={SaveButton} alt=""></img>
              <p className="text-lg font-semibold mt-[1px]">Lưu bài</p>
            </button>
          </div>
        </div>
        {/* end button */}

        {/* commentlist */}
        <div className="flex flex-col">
          {comments && <CommentList comments={comments}></CommentList>}
        </div>
        {/* end-comment-list */}
      </div>

      {/* end-content */}

      {/* comment-box */}
      <div className="min-h-[80px] border-t flex flex-row justify-center gap-[10px] items-center px-2">
        <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-100">
          <img className=" " src={post.user.avatar} alt="" />
        </div>
        <textarea
          autoFocus
          placeholder="Bình luận"
          ref={textareaRef}
          value={text}
          onChange={handleInput}
          className="p-2 w-[700px] text-base border border-gray-300 resize-none focus:outline-none bg-purple-50  rounded-xl "
        ></textarea>
        <div className="p-2 rounded-full hover:bg-slate-100 hover:cursor-pointer transition-colors">
          <img className="translate-x-[4px]" src={send} alt="" />
        </div>
      </div>
      {/* end-comment-box */}
    </div>
  );
}
