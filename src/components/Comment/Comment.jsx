import { useEffect, useRef, useState } from "react";

export default function Comment({ comment }) {
  return (
    <div className="flex w-full">
      {/* postUser */}
      <div className=" flex justify-between ml-[12px] mt-[15px]">
        <div className="flex">
          <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-100">
            <img
              className=""
              src={comment.user.avatar}
              alt="ảnh đại diện"
            ></img>
          </div>
        </div>
      </div>
      {/* end postUser */}
      <div className="mt-[10px]">
        <p className="text-lg font-semibold">{comment.user.username}</p>
        <p
          placeholder="Bình luận"
          className="p-2 w-fit max-w-[400px] text-base border border-gray-300 focus:outline-none bg-purple-50  rounded-xl"
        >
          {comment.content}
        </p>
      </div>
    </div>
  );
}
