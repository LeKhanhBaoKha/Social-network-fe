import React, { useEffect, useState } from "react";
import gif from "../../../assets/svg/CreatePost/gif-svgrepo-com.svg";
import "react-responsive-modal/styles.css";
import "../../../assets/scss/components/CreatePost/CreatePost.scss";
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
import EmojiWindow from "./EmojiPicker";
import APIPost from "../../../api/post/APIPost";
import { NotificationManager } from "react-notifications";

export default function EditPost({ post, setOpenEdit, setPost }) {
  const imageUrl = "http://localhost:8000/storage/posts/";
  const [files, setFiles] = useState(null);
  const [pictures, setPictures] = useState(post.pictures);
  const [videos, setVideos] = useState(post.videos);
  const [text, setText] = useState(post.post_text);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [open, setOpen] = useState(false);
  const [openAudience, setOpenAudience] = useState(false);
  const [AudiencePicker, setAudiencePicker] = useState(1);
  const [data, setData] = useState({
    id: null,
    post_text: null,
    post_pictures: null,
    old_pictures: null,
    post_videos: null,
    old_videos: null,
    post_privacy: null,
  });

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const onOpenAudience = () => setOpenAudience(true);
  const onCloseAudience = () => setOpenAudience(false);

  const handleSendingData = async () => {
    const updatedData = {
      id: post.id,
      post_text: text,
      post_pictures: [],
      post_videos: [],
      old_pictures: pictures,
      old_videos: videos,
      post_privacy: AudiencePicker,
    };
    files?.forEach((file) => {
      if (file.type.startsWith("image")) {
        updatedData.post_pictures.push(file);
      } else if (file.type.startsWith("video")) {
        updatedData.post_videos.push(file);
      }
    });
    setData(updatedData);
  };

  useEffect(() => {
    async function sendData() {
      try {
        const response = await APIPost.update(data);
        if (response?.data?.meta?.statusCode === 200) {
          NotificationManager.success(response?.data?.meta?.message);
        } else {
          NotificationManager.error(response?.data?.meta?.message);
        }
        //render the update post
        const updateData = await APIPost.get(post.id);
        setPost(updateData.data.data);
      } catch (error) {
        NotificationManager.error(error?.response?.data?.meta?.message);
        console.error("Error:", error);
      }
    }
    if (data.post_text || data.post_pictures || data.post_videos) {
      sendData();
      setOpenEdit(false);
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

  const handleRemovePictures = (index) => {
    setPictures((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleRemoveVideos = (index) => {
    setVideos((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
  return (
    <div>
      <div className="flex items-center justify-center p-auto rounded-xl">
        <div className="postUser flex flex-col justify-between">
          {/* header */}
          <div className="font-bold text-xl text-center border-b pb-[10px]">
            Chỉnh sửa bài viết
          </div>
          <div className="flex">
            <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full">
              <img className="" src={post.user.avatar} alt="ảnh đại diện"></img>
            </div>

            <div className="my-[10px] flex flex-col">
              <p className="font-semibold ">{post.user.username}</p>
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
                    {file?.type?.startsWith("image") ? (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Selected media ${index}`}
                        className="max-w-[500px] max-h-[500px] rounded-lg"
                      />
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

                {pictures &&
                  pictures.map(({ picture }, index) => (
                    <div key={index} className="relative">
                      {post.id < 17 && (
                        <div className=" max-h-[500px] max-w-[500px] overflow-x-hidden ">
                          <img
                            className="object-contain overflow-x-hidden rounded-lg"
                            src={picture}
                            alt="content"
                          ></img>
                        </div>
                      )}
                      {post.id >= 17 && (
                        <div className=" max-h-[500px] max-w-[500px] overflow-x-hidden">
                          <img
                            className="object-contain overflow-x-hidden rounded-lg"
                            src={imageUrl + picture}
                            alt="content"
                          ></img>
                        </div>
                      )}
                      <button
                        onClick={() => handleRemovePictures(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      >
                        X
                      </button>
                    </div>
                  ))}
                {videos &&
                  videos.map(({ video }, index) => (
                    <div key={index} className="relative">
                      <video
                        src={imageUrl + video}
                        controls
                        className="max-w-[500px] max-h-[500px] rounded-lg"
                      ></video>
                      <button
                        onClick={() => handleRemoveVideos(index)}
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
              <button>Sửa</button>
            </div>
          </div>
        </div>
      </div>
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
        </div>
      </Modal>
      {/* end audience select */}
    </div>
  );
}
