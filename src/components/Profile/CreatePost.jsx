import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import "../../assets/scss/components/CreatePost/CreatePost.scss";
import { Modal } from "react-responsive-modal";
import {
  faCaretDown,
  faCog,
  faGlobe,
  faUserCheck,
  faUserFriends,
  faUserLock,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmojiPicker from "emoji-picker-react";

export default function CreatePost() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [openAudience, setOpenAudience] = useState(false);
  const onOpenAudience = () => setOpenAudience(true);
  const onCloseAudience = () => setOpenAudience(false);

  const [AudiencePicker, setAudiencePicker] = useState("public");

  const audience = [
    {
      name: "Công khai",
      key: "public",
      text: "Ai cũng có thể xem bài viết của bạn",
      svg: <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faGlobe} />,
    },
    {
      name: "Bạn bè",
      key: "friends",
      text: "Chỉ bạn bè có thể thấy",
      svg: (
        <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faUserFriends} />
      ),
    },
    {
      name: "Bạn bè ngoại trừ",
      key: "except",
      text: "Không hiển thị với 1 số bạn bè",
      svg: <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faUserTimes} />,
    },
    {
      name: "Chỉ mình tôi",
      key: "private",
      text: "Bài viết chỉ có mình bạn biết",
      svg: <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faUserLock} />,
    },
    {
      name: "Bạn bè cụ thể",
      key: "specific",
      text: "Chỉ hiển thị với 1 số bạn bè",
      svg: <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faUserCheck} />,
    },
    {
      name: "Tùy chỉnh",
      key: "config",
      text: "",
      svg: <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faCog} />,
    },
  ];
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
        Bạn đang nghĩ gì? (Tạo bài viết)
      </button>
      <Modal
        classNames={{
          overlay: "",
          modal: "customModal",
        }}
        open={open}
        onClose={onCloseModal}
        center
      >
        <div className="w-[560px] h-[400px] rounded-xl">
          <div className="postUser flex flex-col justify-between">
            {/* header */}
            <div className="font-bold text-xl text-center border-b pb-[10px]">
              Tạo bài viết
            </div>
            <div className="flex">
              <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full">
                <img
                  className=""
                  src="https://m.media-amazon.com/images/M/MV5BMTc3MzY3MjQ3OV5BMl5BanBnXkFtZTcwODI3NjQxMw@@._V1_.jpg"
                  alt="ảnh đại diện"
                ></img>
              </div>

              <div className="my-[10px] flex flex-col">
                <p className="">Name</p>
                <button
                  onClick={onOpenAudience}
                  className="py-1 px-2 bg-gray-300 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Chọn người xem <FontAwesomeIcon icon={faCaretDown} />
                </button>
              </div>
              {/* end header */}
            </div>
            {/* content */}

            <div className="">
              <textarea
                className="focus:outline-none"
                id="w3review"
                name="w3review"
                rows="6"
                cols="70"
                placeholder="Bạn đang nghĩ gì?"
              ></textarea>
              <div></div>
            </div>
          </div>
        </div>
      </Modal>
      {/* end create modal */}
      {/* audience select */}
      <Modal
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        open={openAudience}
        onClose={onCloseAudience}
        center
      >
        <div className="w-[560px] h-[405px] flex flex-col">
          <div className="flex justify-center w-[560px] h-[50px] pb-2 border-b">
            <h1 className="font-bold text-lg text-center">
              Người có thể xem bài viết
            </h1>
          </div>
          <div className="overflow-y-auto">
            {" "}
            <div className="my-[10px]">
              <p className="font-bold">Ai có thể xem bài viết của bạn?</p>
              <p>
                Bài viết của bạn sẽ hiển thị ở Bảng feed, trang cá nhân và kết
                quả tìm kiếm.
              </p>
            </div>
            {/* <div className="w-[540px] flex items-center justify-between mb-[10px] hover:bg-gray-200 p-4 rounded-xl">
            <div className="flex gap-[10px]">
              <div className="bg-gray-300 px-[15px] py-[15px] h-[54px] w-[54px] rounded-full">
                <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faGlobe} />
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Công khai</p>
                <p>ai cũng có thể xem</p>
              </div>
            </div>

            <div className="flex justify-center items-center h-[26px] w-[26px] border border-blue-500 rounded-full">
              <div className="h-[18px] w-[18px] rounded-full bg-blue-500"></div>
            </div>
          </div> */}
            {audience.map(({ name, key, text, svg }) => (
              <div
                onClick={() => setAudiencePicker(key)}
                key={key}
                className="w-[540px] flex items-center justify-between hover:bg-gray-200 transition-colors p-4 rounded-xl"
              >
                <div className="flex gap-[10px]">
                  <div className="bg-gray-300 px-[15px] py-[15px] h-[54px] w-[54px] rounded-full">
                    {svg}
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold">{name}</p>
                    <p>{text}</p>
                  </div>
                </div>

                <div
                  onClick={() => setAudiencePicker(key)}
                  className={`flex hover:cursor-pointer justify-center items-center h-[26px] w-[26px] border border-gray-500 rounded-full`}
                >
                  <div
                    className={`h-[18px] w-[18px] rounded-full ${
                      AudiencePicker === key ? "bg-purple-500" : ""
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[10px] flex justify-end gap-[10px]">
            <button
              onClick={onCloseAudience}
              className="w-[100px] text-purple-500 p-2 hover:bg-gray-200 rounded-lg text-lg transition-colors"
            >
              Hủy
            </button>
            <button className="w-[100px] p-2 text-white hover:bg-purple-300 bg-purple-500 rounded-lg text-lg transition-colors">
              Xong
            </button>
          </div>
        </div>
      </Modal>
      {/* end audience select */}
    </div>
  );
}
