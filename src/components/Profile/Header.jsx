import bg_img from "../../assets/images/bg_img.jpg";
import avatar from "../../assets/images/anhdaidien.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
export default function ProfileHeader() {
  const [activeTab, setActiveTab] = useState("/Home");
  const location = useLocation();

  const tabs = [
    {
      name: "Bài viết",
      url: "/Post",
    },
    {
      name: "Giới thiệu",
      url: "/About",
    },
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

  return (
    <div className="w-screen lg:w-[940px] bg-white rounded-xl">
      {/* background-img */}
      <div className="h-[200px] lg:w-[940px] lg:h-[400px] overflow-hidden rounded-xl m-auto">
        <img className="" src={bg_img} alt="bg_img" />
      </div>
      {/* end background-img */}

      {/* user */}
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row lg:mx-8 lg:justify-between w-[876px] h-[130px]">
          <div className="flex justify-center">
            {/* avatar */}
            <div className="border-[5px] border-white translate-y-[-30%] w-[168px] h-[168px] overflow-hidden rounded-full">
              <img className="" src={avatar} alt="avatar" />
            </div>
            {/* name */}
            <div className="mx-3 my-5">
              <h1 className="font-bold text-4xl">Bảo Kha</h1>
              <p className="text-gray-500">Bạn bè</p>
            </div>
          </div>

          {/* button */}
          <div className="lg:my-10 flex justify-center translate-y-[-90%] lg:translate-y-[0%]">
            <button className="font-medium p-2 rounded-lg text-lg text-white bg-purple-500 mr-[10px] hover:bg-purple-400 transition-colors">
              <FontAwesomeIcon className="mr-2" icon={faPlus} />
              Thêm vào tin
            </button>
            <button className="font-medium p-2 rounded-lg text-lg  bg-gray-300 hover:bg-gray-200 transition-colors">
              <FontAwesomeIcon className="mr-2" icon={faPlus} />
              Chỉnh sửa trang cá nhân
            </button>
          </div>
        </div>
      </div>

      {/* end user */}

      {/* tabs */}

      <div className="mt-[70px] lg:mt-0 border-t border-gray-300 w-sceen lg:w-[876px] m-auto flex gap-[3px] ">
        {tabs.map(({ name, url }) => (
          <NavLink
            to={url}
            onClick={() => {
              setActiveTab(url);
            }}
          >
            <div
              className={`border-y-[3px] border-white ${
                activeTab.includes(url)
                  ? "border-b-[3px] border-b-[#1B66C9] "
                  : "hover:bg-[#E6E6E6] rounded-xl transition-all"
              }`}
            >
              <div
                className={` py-[2px] w-[100px] h-[40px] grid rounded-xl justify-center content-center	hover:bg-[#E6E6E6] transition-all`}
              >
                <p className="">{name}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      {/* end tabs */}
    </div>
  );
}
