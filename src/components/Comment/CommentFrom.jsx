import { useEffect, useRef, useState } from "react";
import send from "../../assets/svg/Chatbox/send.svg";
export default function CommentFrom() {
  const [text, setText] = useState("");

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

  return (
    <div className="flex gap-[10px]">
      <textarea
        autoFocus
        ref={textareaRef}
        value={text}
        onChange={handleInput}
        className="p-2 w-[400px] max-w-[500px] text-base border border-gray-300 focus:outline-none bg-purple-50 rounded-xl resize-none "
      ></textarea>
      <div className="p-2 rounded-full hover:bg-slate-100 hover:cursor-pointer transition-colors">
        <img className="translate-x-[10%]" src={send} alt="" />
      </div>
    </div>
  );
}
