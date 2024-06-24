import React, { useState, useRef, useEffect } from "react";
import LikeButton from "../../assets/svg/LikeButton.svg";
import Batngo from "../../assets/svg/Batngo.svg";
import Buon from "../../assets/svg/Buon.svg";
import BuonCuoi from "../../assets/svg/BuonCuoi.svg";
import PhanNo from "../../assets/svg/PhanNo.svg";
import Thich from "../../assets/svg/Thich.svg";
import ThuongThuong from "../../assets/svg/ThuongThuong.svg";
import YeuThich from "../../assets/svg/YeuThich.svg";
import APIPost from "../../api/post/APIPost";
import { NotificationManager } from "react-notifications";

const reactions = [
  { type: "Thích", icon: Thich, color: "#4267B2", key: 1 },
  { type: "Yêu thích", icon: YeuThich, color: "#F25268", key: 2 },
  { type: "Haha", icon: BuonCuoi, color: "#FFD700", key: 3 },
  { type: "Thương", icon: ThuongThuong, color: "#F25268", key: 4 },
  { type: "Wow", icon: Batngo, color: "#FFD700", key: 5 },
  { type: "Buồn", icon: Buon, color: "#FFD700", key: 6 },
  { type: "Phẫn nộ", icon: PhanNo, color: "#F25268", key: 7 },
];

export default function DetailPostLikeButton({ post }) {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [showReactions, setShowReactions] = useState(false);
  const [data, setData] = useState(null);
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
    console.log("select reaction", reaction);
    const likeData = {
      post_id: post.id,
      reaction_id: reaction.key,
    };
    setData(likeData);
    setShowReactions(false);
  };

  useEffect(() => {
    async function sendData() {
      try {
        const response = await APIPost.like(data);
        if (response?.data?.meta?.statusCode === 200) {
          NotificationManager.success(response?.data?.meta?.message);
        } else {
          NotificationManager.error(response?.data?.meta?.message);
        }
      } catch (error) {
        // NotificationManager.error(error?.response?.data?.meta?.message);
        console.error("Error:", error);
      }
    }
    if (data != null) {
      sendData();
      // setOpenEdit(false);
    }
  }, [data]);

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
              <p className="font-semibold text-lg">{selectedReaction.type}</p>
            </span>
          ) : (
            <button className="flex items-center flex-row gap-[5px]">
              <img className="" src={LikeButton} alt=""></img>
              <p className="text-lg font-semibold mt-[1px]">Thích</p>
            </button>
          )}
        </button>
      </div>

      {showReactions && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-[42%] bg-white border border-gray-300 rounded-lg shadow-lg flex  p-1">
          {reactions.map((reaction) => (
            <button
              key={reaction.key}
              className="w-[40px] h-[40px] flex flex-col items-center justify-center text-md rounded hover:bg-gray-300 transition-colors"
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
