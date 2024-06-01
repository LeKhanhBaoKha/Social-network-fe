import React, { useState, useRef } from "react";
import {
  FaThumbsUp,
  FaHeart,
  FaLaugh,
  FaSurprise,
  FaSadTear,
  FaAngry,
} from "react-icons/fa";
import LikeButtonIcon from "../../assets/svg/LikeButton.svg";

const reactions = [
  { type: "Like", icon: <FaThumbsUp />, color: "#4267B2" },
  { type: "Love", icon: <FaHeart />, color: "#F25268" },
  { type: "Haha", icon: <FaLaugh />, color: "#FFD700" },
  { type: "Wow", icon: <FaSurprise />, color: "#FFD700" },
  { type: "Sad", icon: <FaSadTear />, color: "#FFD700" },
  { type: "Angry", icon: <FaAngry />, color: "#F25268" },
];

export default function LikeButton() {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [showReactions, setShowReactions] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowReactions(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowReactions(false);
    }, 200);
  };

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
    setShowReactions(false);
  };

  return (
    <div
      className="relative inline-block translate-x-[100%]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-[160px] h-[36px] mt-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
        <button className="flex flex-row gap-[5px]">
          {selectedReaction ? (
            <span
              style={{ color: selectedReaction.color }}
              className="flex items-center gap-1"
            >
              {selectedReaction.icon} {selectedReaction.type}
            </span>
          ) : (
            <div className="flex flex-row gap-[5px]">
              <img className="mt-[5px]" src={LikeButtonIcon} alt=""></img>
              <p className="text-lg font-semibold mt-[1px]">Thích</p>
            </div>
          )}
        </button>
      </div>

      {showReactions && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-lg p-2 flex space-x-2">
          {reactions.map((reaction) => (
            <button
              key={reaction.type}
              className="flex flex-col items-center text-sm p-2 rounded hover:bg-gray-100"
              onClick={() => handleReactionClick(reaction)}
              style={{ color: reaction.color }}
            >
              {reaction.icon}
              <span>{reaction.type}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
