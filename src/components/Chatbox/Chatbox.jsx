import {
  faCaretRight,
  faPhone,
  faVideo,
  faWindowMinimize,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import upload from "../../assets/svg/Chatbox/add_photo_alternate_outlined.svg";
import send from "../../assets/svg/Chatbox/send.svg";
import threedot from "../../assets/svg/Chatbox/ThreeDot.svg";
import share from "../../assets/svg/Chatbox/ShareButton.svg";
import smile from "../../assets/svg/Chatbox/smile.svg";
import { useEffect, useRef, useState } from "react";

export default function Chatbox() {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const maxHeight = 80;

  const messeges = [
    {
      user: "Cornor",
      text: "Hey Sarah, free tonight?",
    },
    {
      user: "Sarah",
      text: "Maybe! Depends, what's up?",
    },
    {
      user: "Cornor",
      text: "That new sci-fi flick everyone's talking about?",
    },
    {
      user: "Sarah",
      text: "Ooh, tempting! Let me check the showtimes.",
    },
    {
      user: "Cornor",
      text: "They have a 7:15pm showing, interested?",
    },
    {
      user: "Sarah",
      text: "Perfect! I'll grab tickets, you grab popcorn?",
    },
    {
      user: "Cornor",
      text: "Deal! Any specific flavor cravings?",
    },
    {
      user: "Sarah",
      text: "Surprise me! But go easy on the butter, please.",
    },
    {
      user: "Cornor",
      text: "Consider it done. See you there!",
    },
    {
      user: "Sarah",
      text: "Can't wait! Gonna wear my lucky space socks.",
    },
    {
      user: "Cornor",
      text: "Haha, of course you are!",
    },
  ];

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
    <div className="w-[385px] h-[500px] border rounded-lg flex flex-col">
      {/* header */}
      <div className="flex flex-row p-2 justify-between border-b h-[70px]">
        <div className="flex flex-row gap-[10px] hover:cursor-pointer">
          <div>
            <img
              className="w-[50px] h-[50px] rounded-full"
              src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/317816571_1806291249705020_3619995257127480928_n.jpg?stp=c0.15.160.160a_dst-jpg_p160x160&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wxwB4ZQaCS4Q7kNvgEvzSWN&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYB-DlWyh-3hOTF0YGoZlQ4W4Mwio02gs3irl6fDLZ1WFQ&oe=665155DC"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">Bảo Kha</h1>
            <p className="">Đang hoạt động</p>
          </div>
        </div>
        <div className="flex py-2">
          <FontAwesomeIcon
            className="text-purple-400 text-2xl p-2 rounded-full hover:bg-purple-100 transition-colors hover:cursor-pointer"
            icon={faPhone}
          />
          <FontAwesomeIcon
            className="text-purple-400 text-2xl p-2 rounded-full hover:bg-purple-100 transition-colors hover:cursor-pointer"
            icon={faVideo}
          />
          <div className="p-2 rounded-full hover:bg-purple-100 transition-colors hover:cursor-pointer">
            <FontAwesomeIcon
              className="text-purple-400 text-2xl translate-y-[-8px]"
              icon={faWindowMinimize}
            />
          </div>
          <div className="py-[8px] px-[10px] rounded-full hover:bg-purple-100 transition-colors hover:cursor-pointer">
            <FontAwesomeIcon className="text-purple-400 text-2xl" icon={faX} />
          </div>
        </div>
      </div>
      {/* content */}
      <div className="h-[370px] overflow-auto">
        {messeges.map(({ user, text }) => (
          <div
            className={`flex flex-row mb-[10px] ${
              user === "Sarah"
                ? "justify-end mr-[5px]"
                : "justify-start ml-[5px]"
            } "`}
          >
            {user === "Sarah" && (
              <div className="flex flex-row items-center gap-[8px] px-1">
                <div className="">
                  <img src={threedot} alt="" />
                </div>
                <div className="">
                  <img className="transform scale-x-[-1]" src={share} alt="" />
                </div>
                <div className="">
                  <img src={smile} alt="" />
                </div>
              </div>
            )}
            <p className="p-2 max-w-[250px] bg-purple-50 mb-1 rounded-xl">
              {user}:{text}
            </p>
            {user === "Cornor" && (
              <div className="flex flex-row items-center px-1">
                <div className="p-2  rounded-full hover:bg-purple-100 transition-colors">
                  <img src={smile} alt="" />
                </div>
                <div className="p-2 rounded-full hover:bg-purple-100 transition-colors">
                  <img className="transform scale-x-[-1]" src={share} alt="" />
                </div>

                <div className="p-2 rounded-full hover:bg-purple-100 transition-colors">
                  <img src={threedot} alt="" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* button */}
      <div className="min-h-[60px] border-t flex flex-row gap-[10px] items-center px-2">
        <img className="w-[45px] hover:cursor-pointer" src={upload} alt="" />
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleInput}
          className="p-2 w-[250px] text-base border border-gray-300 resize-none focus:outline-none bg-purple-50  rounded-xl"
        ></textarea>
        <div className="p-2 rounded-full hover:bg-slate-100 hover:cursor-pointer transition-colors">
          <img className="translate-x-[4px]" src={send} alt="" />
        </div>
      </div>
    </div>
  );
}
