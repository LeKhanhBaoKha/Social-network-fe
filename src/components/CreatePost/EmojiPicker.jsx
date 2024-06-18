import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import "./font.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughWink } from "@fortawesome/free-solid-svg-icons";

const EmojiWindow = ({ setEmoji }) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const emojiPickerRef = useRef(null);

  const onEmojiClick = (emojiObject) => {
    setEmoji(emojiObject);
  };

  //use to open emoji
  const handleOpenEmoji = () => {
    setShowEmoji(true);
  };

  //use to close the emoji
  const handleClickOutside = (event) => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target)
    ) {
      setShowEmoji(false);
    }
  };

  useEffect(() => {
    if (showEmoji) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmoji]);

  return (
    <div className="relative inline-block">
      <FontAwesomeIcon
        onClick={handleOpenEmoji}
        className="text-yellow-400 text-3xl hover:cursor-pointer"
        icon={faFaceLaughWink}
      />
      {showEmoji && (
        <div
          ref={emojiPickerRef}
          className="absolute bottom-full left-1/2 transform -translate-x-[60%] -translate-y-[10px] bg-white border border-gray-300 rounded-lg shadow-lg flex p-1 z-[2000]"
        >
          <EmojiPicker
            skinTonesDisabled
            height={350}
            width={300}
            onEmojiClick={onEmojiClick}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiWindow;
