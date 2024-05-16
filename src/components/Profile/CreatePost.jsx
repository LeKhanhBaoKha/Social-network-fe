
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";

import { Modal } from "react-responsive-modal";

export default function CreatePost() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="flex w-[560px] lg:w-[500px] border bg-white rounded-xl p-1">
      <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full">
        <img
          src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/317816571_1806291249705020_3619995257127480928_n.jpg?stp=c0.15.160.160a_dst-jpg_p160x160&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LdP56erkWXUQ7kNvgFaf4M_&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYB0VFmnatj5nEwRkHQbkv1A5qymTzlTM2l3AlBZIbk6Iw&oe=66496CDC"
          alt=""
        />
      </div>
      <button
        onClick={onOpenModal}
        className="bg-gray-300 my-auto w-[470px] lg:w-[410px] h-[40px] rounded-lg pl-2 text-start hover:hover:bg-gray-200 transition-colors"
      >
        Bạn đang nghĩ gì?(Tạo bài viết)
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div>
  );
}
