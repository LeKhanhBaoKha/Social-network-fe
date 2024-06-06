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
import Batngo from "../../assets/svg/CenterDetailPost/Batngo.svg";
import Buon from "../../assets/svg/CenterDetailPost/Buon.svg";
import BuonCuoi from "../../assets/svg/CenterDetailPost/BuonCuoi.svg";
import PhanNo from "../../assets/svg/CenterDetailPost/PhanNo.svg";
import Thich from "../../assets/svg/CenterDetailPost/Thich.svg";
import ThuongThuong from "../../assets/svg/CenterDetailPost/ThuongThuong.svg";
import YeuThich from "../../assets/svg/CenterDetailPost/YeuThich.svg";

const reactions = [
  { type: "Thích", icon: Thich, color: "#4267B2" },
  { type: "Yêu thích", icon: YeuThich, color: "#F25268" },
  { type: "Haha", icon: BuonCuoi, color: "#FFD700" },
  { type: "Thương", icon: ThuongThuong, color: "#F25268" },
  { type: "Wow", icon: Batngo, color: "#FFD700" },
  { type: "Buồn", icon: Buon, color: "#FFD700" },
  { type: "Phẫn nộ", icon: PhanNo, color: "#F25268" },
];

export default function DetailPostLikeButton() {
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
              <p className="text-lg font-semibold mt-[1px]">
                {selectedReaction.type}
              </p>
            </span>
          ) : (
            <button className="flex flex-row gap-[5px]">
              <img className="mt-[5px]" src={LikeButton} alt=""></img>
              <p className="text-lg font-semibold mt-[1px]">Thích</p>
            </button>
          )}
        </button>
      </div>

      {showReactions && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-[30%] bg-white border border-gray-300 rounded-lg shadow-lg flex p-1">
          {reactions.map((reaction) => (
            <button
              key={reaction.type}
              className="w-[50px] h-[40px] flex flex-col items-center text-md px-2 py-1 rounded hover:bg-gray-100 "
              onClick={() => handleReactionClick(reaction)}
              style={{ color: reaction.color }}
            >
              <img className="w-[40px] h-[40px]" src={reaction.icon} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
