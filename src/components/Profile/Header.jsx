import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faEdit,
  faGlobe,
  faPhotoVideo,
  faUserFriends,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "../../assets/scss/components/CreatePost/CreatePost.scss";
import "../../assets/scss/components/WhoLikeYourPost/WhoLikeYourPost.scss";
import "../../assets/scss/components/CenterDetailPost/CenterDetailPost.scss";
import { NavLink, useLocation } from "react-router-dom";
import WhoLikeYourPost from "../WhoLikeYourPost/WhoLikeYourPost";
import Modal from "react-responsive-modal";
import { TextField } from "@mui/material";
import { NotificationManager } from "react-notifications";
import APIProfile from "../../api/APIProfile";
export default function ProfileHeader({
  user,
  activeTab,
  setActiveTab,
  setUser,
  fetchPosts,
}) {
  const [openLike, setOpenLike] = useState(false);
  const [data, setData] = useState(null);
  const onOpenLikeModal = () => setOpenLike(true);
  const onCloseLikeModal = () => setOpenLike(false);
  const [openAudience, setOpenAudience] = useState(false);
  const [AudiencePicker, setAudiencePicker] = useState(1);
  const onOpenAudience = () => setOpenAudience(true);
  const onCloseAudience = () => setOpenAudience(false);
  const [background, setBackground] = useState(user?.background_image);
  const handleRemoveBG = () => {
    setBackground(null);
  };

  const [avatar, setAvatar] = useState(user?.avatar);
  const handleRemoveAvatar = () => {
    setAvatar(null);
  };

  const [uploadbg, setUploadBg] = useState(null);
  const handleBGChange = (e) => {
    setBackground(null);
    setUploadBg(e.target.files[0]);
  };
  const [uploadAvatar, setUploadAvatar] = useState(null);
  const handleAvatarChange = (e) => {
    setAvatar(null);
    setUploadAvatar(e.target.files[0]);
  };

  const [firstname, setfirstname] = useState(user?.first_name);
  const handleFirstChange = (event) => {
    setfirstname(event.target.value);
  };
  const [lastname, setlastname] = useState(user?.last_name);
  const handleLastChange = (event) => {
    setlastname(event.target.value);
  };
  const [openEdit, setOpenEdit] = useState(false);
  const onOpenEditModal = () => setOpenEdit(true);
  const onCloseEditModal = () => {
    setOpenEdit(false);
    setUploadAvatar(null);
    setUploadBg(null);
    setBackground(user?.background_image);
    setAvatar(user?.avatar);
  };

  const handleSendingData = () => {
    const updatedData = {
      background_image: uploadbg,
      avatar: uploadAvatar,
      first_name: firstname,
      last_name: lastname,
      privacy: AudiencePicker,
    };
    setData(updatedData);
    // console.log("sending data:", updatedData);
  };

  useEffect(() => {
    async function sendData() {
      try {
        const response = await APIProfile.edit(data);
        if (response?.data?.meta?.statusCode === 200) {
          NotificationManager.success(response?.data?.meta?.message);
          console.log("edit data", response?.data?.data.original);
          setUser(response?.data?.data);
          fetchPosts();
        } else {
          NotificationManager.error(response?.data?.meta?.message);
        }
      } catch (error) {
        NotificationManager.error(error?.response?.data?.meta?.message);
        console.error("Error:", error);
      }
    }
    if (
      data?.background_image ||
      data?.avatar ||
      data?.first_name ||
      data?.last_name
    ) {
      sendData();
      setOpenEdit(false);
    }
  }, [data]);

  const imageUrl = "http://localhost:8000/storage/posts/";
  const tabs = [
    {
      name: "Bài viết",
      url: "/Post",
    },
    // {
    //   name: "Giới thiệu",
    //   url: "/About",
    // },
    {
      name: "bạn bè",
      url: "/friends",
    },
    {
      name: "Ảnh",
      url: "/Image",
    },
    {
      name: "Video",
      url: "/Video",
    },
  ];

  const audience = [
    {
      name: "Công khai",
      key: 1,
      text: "Ai cũng có thể xem trang cá nhân của bạn",
      svg: <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faGlobe} />,
    },
    {
      name: "Bạn bè",
      key: 2,
      text: "Chỉ bạn bè xem trang cá nhân của bạn",
      svg: (
        <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faUserFriends} />
      ),
    },
    {
      name: "Chỉ mình tôi",
      key: 4,
      text: "Chỉ có mình bạn được xem",
      svg: <FontAwesomeIcon className="text-2xl m-0 p-0" icon={faUserLock} />,
    },
  ];

  return (
    <>
      {user != null && (
        <div className="w-screen lg:w-[940px] bg-white rounded-xl relative">
          {/* background-img */}
          <div className="h-[200px] lg:w-[940px] lg:h-[400px] overflow-hidden rounded-xl m-auto z-0">
            {user?.background_image == null ? (
              <img
                className=""
                src="https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="bg_img"
              />
            ) : (
              <img
                className=""
                src={imageUrl + user?.background_image}
                alt="bg_img"
              />
            )}
          </div>
          {/* end background-img */}

          {/* user */}
          <div className="flex justify-center ">
            <div className="flex flex-col lg:flex-row lg:mx-8 lg:justify-between w-[876px] h-[130px]">
              <div className="flex justify-center">
                {/* avatar */}
                <div className="bg-gray-300 translate-y-[-30%] w-[168px] h-[168px] overflow-hidden rounded-full z-50">
                  {user?.avatar == null ? (
                    <img
                      className="rounded-full  "
                      src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                      alt="avatar"
                    />
                  ) : (
                    <img
                      className=""
                      src={
                        user?.avatar?.includes("http")
                          ? user?.avatar
                          : imageUrl + user?.avatar
                      }
                      alt="bg_img"
                    />
                  )}
                </div>
                {/* name */}
                <div className="mx-3 my-5">
                  <h1 className="font-bold text-4xl">
                    {user?.first_name + " " + user?.last_name}
                  </h1>
                  <div className="flex flex-row gap-[10px]">
                    <p
                      onClick={onOpenLikeModal}
                      className="text-gray-500 font-semibold text-lg hover-underline-animation hover:cursor-pointer"
                    >
                      {user?.numberOfFriend + " "}Bạn bè
                    </p>
                    <button
                      onClick={onOpenEditModal}
                      className="flex items-center gap-[2px] font-semibold py-1 px-2 bg-gray-300 rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      {audience.map(({ name, key, text, svg }) => (
                        <div key={key}>
                          {AudiencePicker === key && <p>{name}</p>}
                        </div>
                      ))}
                      <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                  </div>
                </div>
              </div>

              {/* button */}
              <div className="lg:my-10 flex justify-center translate-y-[-90%] lg:translate-y-[0%]">
                {/* <button className="font-medium p-2 rounded-lg text-lg text-white bg-purple-500 mr-[10px] hover:bg-purple-400 transition-colors">
                  <FontAwesomeIcon className="mr-2" icon={faPlus} />
                  Thêm vào tin
                </button> */}
                <button
                  onClick={onOpenEditModal}
                  className="font-medium p-2 rounded-lg text-lg  bg-gray-300 hover:bg-gray-200 transition-colors "
                >
                  <FontAwesomeIcon className="mr-2" icon={faEdit} />
                  <p className="hover-underline-animation hover:cursor-pointer">
                    Chỉnh sửa trang cá nhân
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* end user */}

          {/* tabs */}

          <div className="text-lg mt-[70px] lg:mt-0 border-t border-gray-300 w-sceen lg:w-[876px] m-auto flex gap-[3px] ">
            {tabs.map(({ name, url }) => (
              <NavLink
                onClick={() => {
                  setActiveTab(url);
                }}
              >
                <div
                  className={`border-y-[3px]  border-white ${
                    activeTab.includes(url)
                      ? "border-b-[3px] border-b-[#1B66C9] "
                      : "hover:bg-[#E6E6E6] rounded-xl transition-all"
                  }`}
                >
                  <div
                    className={` py-[2px] w-[100px] h-[40px] grid rounded-xl justify-center content-center	hover:bg-[#E6E6E6] transition-all `}
                  >
                    <p className="hover-underline-animation hover:cursor-pointer">
                      {name}
                    </p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
          {/* end tabs */}
          <Modal
            classNames={{
              overlay: "",
              modal: "customModalCenterDetailPost",
            }}
            open={openEdit}
            onClose={onCloseEditModal}
            center
          >
            <div className="justify-center w-[620px] h-[560px] flex flex-col gap-[10px] rounded-lg">
              <div className="text-center h-[30px]">
                <p className="font-semibold text-xl p-4 border-b">
                  Chỉnh sửa trang cá nhân
                </p>
              </div>
              {/* edit-content */}
              <div className="flex flex-col w-[620px] h-[440px] overflow-auto mt-5">
                <div className="flex flex-row w-[500px] m-auto">
                  <div className="flex flex-row p-2  items-center gap-[10px]">
                    <TextField
                      id="outlined-basic"
                      label="Nhập họ"
                      variant="outlined"
                      value={firstname}
                      onChange={handleFirstChange}
                    />
                  </div>
                  <div className="flex flex-row p-2 w-[500px] m-auto items-end gap-[10px]">
                    <TextField
                      id="outlined-basic"
                      label="Nhập tên"
                      variant="outlined"
                      onChange={handleLastChange}
                      value={lastname}
                    />
                  </div>
                </div>

                <div className="flex flex-row items-center gap-[10px] w-[500px] m-auto">
                  <p className="font-semibold">
                    Ai có thể thấy trang cá nhân của bạn?
                  </p>
                  <button
                    onClick={onOpenAudience}
                    className="flex items-center gap-[2px] font-semibold py-1 px-2 bg-gray-300 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    {audience.map(({ name, key, text, svg }) => (
                      <div key={key}>
                        {AudiencePicker === key && <p>{name}</p>}
                      </div>
                    ))}
                    <FontAwesomeIcon icon={faCaretDown} />
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="grid flex-col">
                    <div className="p-2 w-[500px] justify-self-start flex flex-row gap-[10px] items-center">
                      <p className="font-semibold">Chọn ảnh bìa</p>
                      <FontAwesomeIcon
                        className="text-blue-500 text-3xl hover:cursor-pointer"
                        icon={faPhotoVideo}
                        onClick={() =>
                          document.getElementById("bg-upload").click()
                        }
                      />
                      <input
                        type="file"
                        id="bg-upload"
                        accept="image/*, video/*"
                        onChange={handleBGChange}
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="relative justify-self-cente">
                      <div className="h-[280px] bg-slate-200 max-w-[500px] flex justify-center rounded-lg">
                        <img
                          src={imageUrl + background}
                          alt=""
                          className="object-contain rounded-lg"
                        />
                        {uploadbg && uploadbg != null && (
                          <img
                            src={URL.createObjectURL(uploadbg)}
                            alt=""
                            className="object-fill m-auto rounded-lg"
                          />
                        )}
                      </div>
                      <button
                        onClick={() => handleRemoveBG()}
                        className={`absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center ${
                          background == null ? "hidden" : ""
                        }`}
                      >
                        X
                      </button>
                      {uploadbg && uploadbg != null && (
                        <button
                          onClick={() => setUploadBg(null)}
                          className={`absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center ${
                            uploadbg == null ? "hidden" : ""
                          }`}
                        >
                          X
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid flex-col ">
                    <div className="p-2 w-[500px] justify-self-start flex flex-row gap-[10px] items-center ">
                      <p className="font-semibold">Chọn ảnh đại diện</p>
                      <FontAwesomeIcon
                        className="text-blue-500 text-3xl hover:cursor-pointer"
                        icon={faPhotoVideo}
                        onClick={() =>
                          document.getElementById("avatar-upload").click()
                        }
                      />
                      <input
                        type="file"
                        id="avatar-upload"
                        accept="image/*, video/*"
                        onChange={handleAvatarChange}
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="relative w-[168px] justify-self-center">
                      <div className="bg-slate-200 w-[168px] h-[168px] overflow-hidden rounded-full ">
                        <img
                          src={
                            avatar?.includes("http")
                              ? avatar
                              : imageUrl + avatar
                          }
                          alt=""
                          className="object-contain rounded-lg"
                        />
                        {uploadAvatar && (
                          <img
                            src={URL.createObjectURL(uploadAvatar)}
                            alt=""
                            className="object-contain rounded-lg"
                          />
                        )}
                      </div>
                      <button
                        onClick={() => handleRemoveAvatar()}
                        className={`absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center ${
                          avatar == null ? "hidden" : ""
                        }`}
                      >
                        X
                      </button>
                      {uploadAvatar != null && (
                        <button
                          onClick={() => setUploadAvatar(null)}
                          className={`absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center ${
                            uploadAvatar == null ? "hidden" : ""
                          }`}
                        >
                          X
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* edit-content */}

              <div
                onClick={() => handleSendingData()}
                className="text-center h-[20px]"
              >
                <p className="font-semibold text-xl border-b bg-purple-500 hover:bg-purple-400 transition-colors p-2 rounded-xl text-white w-[500px] m-auto">
                  Sửa
                </p>
              </div>
            </div>
          </Modal>

          <Modal
            classNames={{
              overlay: "",
              modal: "customModalLike",
            }}
            open={openLike}
            onClose={onCloseLikeModal}
            center
          >
            <WhoLikeYourPost
              yourFriend={user?.userWhoIsYourFriend}
            ></WhoLikeYourPost>
          </Modal>
        </div>
      )}
      <Modal
        classNames={{
          overlay: "customOverlay",
          modal: "editModal",
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
            {audience?.map(({ name, key, text, svg }) => (
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
    </>
  );
}
