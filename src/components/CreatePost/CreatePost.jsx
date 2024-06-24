import React, { useEffect, useState } from "react";
import gif from "../../assets/svg/CreatePost/gif-svgrepo-com.svg";
import "react-responsive-modal/styles.css";
import "../../assets/scss/components/CreatePost/CreatePost.scss";
import { Modal } from "react-responsive-modal";
import "./font.scss";
import FormData from "form-data";
import {
  faCaretDown,
  faCog,
  faFaceLaughWink,
  faFaceSmile,
  faFaceSmileWink,
  faGlobe,
  faLocationDot,
  faPhotoVideo,
  faSmile,
  faUserCheck,
  faUserFriends,
  faUserLock,
  faUserTag,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./font.scss";
import EmojiWindow from "./EmojiPicker";
import APIPost from "../../api/post/APIPost";
import { NotificationManager } from "react-notifications";

export default function CreatePost({ user, setPost, posts, onNewPost }) {
  const imageUrl = "http://localhost:8000/storage/posts/";
  const [files, setFiles] = useState([]);
  const [text, setText] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [open, setOpen] = useState(false);
  const [openAudience, setOpenAudience] = useState(false);
  const [AudiencePicker, setAudiencePicker] = useState(1);
  const [data, setData] = useState({
    post_text: null,
    post_pictures: null,
    post_videos: null,
    post_privacy: null,
  });

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const onOpenAudience = () => setOpenAudience(true);
  const onCloseAudience = () => setOpenAudience(false);

  const handleSendingData = () => {
    const updatedData = {
      post_text: text,
      post_pictures: [],
      post_videos: [],
      post_privacy: AudiencePicker,
    };
    files.forEach((file) => {
      if (file.type.startsWith("image")) {
        updatedData.post_pictures.push(file);
      } else if (file.type.startsWith("video")) {
        updatedData.post_videos.push(file);
      }
    });
    setData(updatedData);
    // console.log("sending data:", updatedData);
  };

  useEffect(() => {
    async function sendData() {
      try {
        const response = await APIPost.create(data);
        if (response?.data?.meta?.statusCode === 200) {
          NotificationManager.success(response?.data?.meta?.message);
          setPost([response?.data?.data[0], ...posts]);
          console.log(response?.data?.data[0]);
        } else {
          NotificationManager.error(response?.data?.meta?.message);
        }
      } catch (error) {
        NotificationManager.error(error?.response?.data?.meta?.message);
        console.error("Error:", error);
      }
    }
    if (data.post_text || data.post_pictures || data.post_videos) {
      sendData();
      setOpen(false);
    }
  }, [data]);

  useEffect(() => {
    const handleEmojiSelect = () => {
      setText((prevText) => prevText + chosenEmoji?.emoji);
    };
    if (text != null && chosenEmoji != null) {
      handleEmojiSelect();
    }
  }, [chosenEmoji]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const audience = [
    {
      name: "Công khai",
      key: 1,
      text: "Ai cũng có thể xem bài viết của bạn",
      svg: <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faGlobe} />,
    },
    {
      name: "Bạn bè",
      key: 2,
      text: "Chỉ bạn bè có thể thấy",
      svg: (
        <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faUserFriends} />
      ),
    },
    {
      name: "Bạn bè ngoại trừ",
      key: 3,
      text: "Không hiển thị với 1 số bạn bè",
      svg: <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faUserTimes} />,
    },
    {
      name: "Chỉ mình tôi",
      key: 4,
      text: "Bài viết chỉ có mình bạn biết",
      svg: <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faUserLock} />,
    },
    {
      name: "Bạn bè cụ thể",
      key: 5,
      text: "Chỉ hiển thị với 1 số bạn bè",
      svg: <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faUserCheck} />,
    },
    {
      name: "Tùy chỉnh",
      key: 6,
      text: "",
      svg: <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faCog} />,
    },
  ];

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFiles(Array.from(e.target.files));
  };

  const handleRemoveMedia = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="flex w-[560px] lg:w-[500px] border bg-white rounded-xl p-1 justify-center items-center ">
      <div className="bg-gray-300 m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full">
        {user?.avatar?.includes("http") ? (
          <img src={user?.avatar} alt="" />
        ) : (
          <img src={imageUrl + user?.avatar} alt="" />
        )}
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
        <div className="flex items-center justify-center p-auto rounded-xl">
          <div className="postUser flex flex-col justify-between">
            {/* header */}
            <div className="font-bold text-xl text-center border-b pb-[10px]">
              Tạo bài viết
            </div>
            <div className="flex items-center">
              <div className="bg-slate-300 m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full">
                {user?.avatar?.includes("http") ? (
                  <img src={user?.avatar} alt="" />
                ) : (
                  <img src={imageUrl + user?.avatar} alt="" />
                )}
              </div>

              <div className="my-[10px] flex flex-col">
                <p className="font-semibold text-lg">
                  {user?.first_name + " " + user?.last_name}
                </p>
                <button
                  onClick={onOpenAudience}
                  className="flex items-center gap-[2px] font-semibold py-1 px-2 bg-gray-300 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  {audience.map(({ name, key, text, svg }) => (
                    <div key={key}>
                      {AudiencePicker === key && <p>{name}</p>}{" "}
                    </div>
                  ))}
                  <FontAwesomeIcon icon={faCaretDown} />
                </button>
              </div>
              {/* end header */}
            </div>
            {/* content */}

            <div className="">
              <div className="h-[250px] min-h-[150px] overflow-y-auto ">
                <textarea
                  value={text}
                  onChange={handleTextChange}
                  className="focus:outline-none text-lg	overflow-y-auto"
                  id="w3review"
                  name="w3review"
                  rows="3"
                  cols="65"
                  placeholder="Bạn đang nghĩ gì?"
                ></textarea>

                <div className="flex items-center justify-center flex-wrap gap-2 overflow-y-auto">
                  {files?.map((file, index) => (
                    <div key={index} className="relative">
                      {file.type.startsWith("image") ? (
                        <div className="max-w-[500px] max-h-[500px] overflow-x-hidden">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Selected media ${index}`}
                            className="object-contain rounded-lg"
                          />
                        </div>
                      ) : (
                        <video
                          src={URL.createObjectURL(file)}
                          controls
                          className="max-w-[500px] max-h-[500px] rounded-lg"
                        ></video>
                      )}
                      <button
                        onClick={() => handleRemoveMedia(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex text-lg justify-between items-center w-full mt-[20px] h-[50px] p-4 mb-[20px] border rounded-xl">
                <p className="font-medium">Thêm vào bài viết của bạn</p>
                <div className="flex gap-[10px] items-center">
                  <FontAwesomeIcon
                    className="text-blue-500 text-3xl hover:cursor-pointer"
                    icon={faPhotoVideo}
                    onClick={() =>
                      document.getElementById("media-upload").click()
                    }
                  />
                  <input
                    type="file"
                    id="media-upload"
                    accept="image/*, video/*"
                    multiple
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                  <FontAwesomeIcon
                    className="text-green-500 text-3xl hover:cursor-pointer"
                    icon={faUserTag}
                  />

                  <EmojiWindow setEmoji={setChosenEmoji}></EmojiWindow>
                  <p>{}</p>
                  <FontAwesomeIcon
                    className="text-red-400 text-3xl hover:cursor-pointer"
                    icon={faLocationDot}
                  />
                  <img className="hover:cursor-pointer" src={gif} alt="gif" />
                </div>
              </div>

              <div
                onClick={() => handleSendingData()}
                className="w-full text-center bg-purple-500 hover:bg-purple-400 transition-colors p-2 rounded-xl text-white"
              >
                <button>Tiếp tục</button>
              </div>
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
        <div className="h-[490px] flex flex-col items-center justify-center">
          <div className="flex justify-center w-[560px] h-[50px] pb-2 border-b">
            <h1 className="font-bold text-lg text-center">
              Người có thể xem bài viết
            </h1>
          </div>
          <div className="overflow-y-auto ">
            <div className="my-[10px]">
              <p className="font-bold">Ai có thể xem bài viết của bạn?</p>
              <p>
                Bài viết của bạn sẽ hiển thị ở Bảng feed, trang cá nhân và kết
                quả tìm kiếm.
              </p>
            </div>
            {audience.map(({ name, key, text, svg }) => (
              <div
                onClick={() => {
                  setAudiencePicker(key);
                  setOpenAudience(false);
                }}
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
                  onClick={() => {
                    setAudiencePicker(key);
                    setOpenAudience(false);
                  }}
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

          {/* <div className="mt-[10px] flex justify-end gap-[10px]">
            <button
              onClick={onCloseAudience}
              className="w-[100px] text-purple-500 p-2 hover:bg-gray-200 rounded-lg text-lg transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={onCloseAudience}
              className="w-[100px] p-2 text-white hover:bg-purple-300 bg-purple-500 rounded-lg text-lg transition-colors"
            >
              Xong
            </button>
          </div> */}
        </div>
      </Modal>
      {/* end audience select */}
    </div>
  );
}
