import React, { useState, useRef } from "react";
import {
  FaThumbsUp,
  FaHeart,
  FaLaugh,
  FaSurprise,
  FaSadTear,
  FaAngry,
} from "react-icons/fa";
import LikeButton from "../../assets/svg/LikeButton.svg";
import Batngo from "../../assets/svg/Batngo.svg";
import Buon from "../../assets/svg/Buon.svg";
import BuonCuoi from "../../assets/svg/BuonCuoi.svg";
import PhanNo from "../../assets/svg/PhanNo.svg";
import Thich from "../../assets/svg/Thich.svg";
import ThuongThuong from "../../assets/svg/ThuongThuong.svg";
import YeuThich from "../../assets/svg/YeuThich.svg";

const reactions = [
  { type: "Thích", icon: Thich, color: "#4267B2" },
  { type: "Yêu thích", icon: YeuThich, color: "#F25268" },
  { type: "Haha", icon: BuonCuoi, color: "#FFD700" },
  { type: "Thương", icon: ThuongThuong, color: "#F25268" },
  { type: "Wow", icon: Batngo, color: "#FFD700" },
  { type: "Buồn", icon: Buon, color: "#FFD700" },
  { type: "Phẫn nộ", icon: PhanNo, color: "#F25268" },
];

export default function PostLikeButton() {
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
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-[160px] h-[36px] mt-auto flex justify-center items-center transition-all rounded-lg">
        <button className="flex flex-row gap-[5px]">
          {selectedReaction ? (
            <span
              style={{ color: selectedReaction.color }}
              className="flex items-center gap-1"
            >
              <img src={selectedReaction.icon} alt="" />
              <p>{selectedReaction.type}</p>
            </span>
          ) : (
            <button className="flex flex-row gap-[5px]">
              <img src={LikeButton} alt=""></img>
              <p className="text-sm mt-[1px]">Thích</p>
            </button>
          )}
        </button>
      </div>

      {showReactions && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-lg flex  p-1">
          {reactions.map((reaction) => (
            <button
              key={reaction.type}
              className="w-[40px] h-[40px] flex flex-col items-center justify-center text-md rounded hover:bg-gray-100 "
              onClick={() => handleReactionClick(reaction)}
              style={{ color: reaction.color }}
            >
              <img className="w-[30px] h-[30px]" src={reaction.icon} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
