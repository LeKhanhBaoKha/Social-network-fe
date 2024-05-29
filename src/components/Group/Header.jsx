import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import share from "../../assets/svg/Group/ShareButton.svg";
export default function GroupHeader() {
  const [activeTab, setActiveTab] = useState("/Post");
  const location = useLocation();

  const tabs = [
    {
      name: "Bài viết",
      url: "/Post",
    },
    {
      name: "Thành viên",
      url: "/Member",
    },
  ];

  return (
    <div className="w-screen lg:w-[940px] bg-white rounded-xl">
      {/* background-img */}
      <div className="h-[200px] lg:w-[940px] lg:h-[400px] overflow-hidden rounded-xl m-auto">
        <img
          className=""
          src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/310065334_1759325007734978_135254363420981357_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wf3ZwLNS6MUQ7kNvgG1mZcC&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYDZ_CJYgvEEBB_FC1GahMVj-4Movx3Ue4dH3WSFaHjk7Q&oe=6655FF63"
          alt="bg_img"
        />
      </div>
      {/* end background-img */}

      {/* user */}
      <div className="flex justify-center">
        <div className="flex flex-col w-[876px] h-[130px]">
          {/* name */}
          <div className=" my-5">
            <h1 className="font-bold text-4xl">
              Kengan/Baki/Isshou Senkin Fandom Việt Nam
            </h1>
          </div>

          {/* button */}
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-[10px]">
              <p>
                <FontAwesomeIcon icon={faLock} />
                &nbsp;Nhóm riêng tư
              </p>
              <p className="text-gray-500">34 Thành viên</p>
            </div>
            <div className="flex flex-row">
              <button className="font-medium py-2 px-4 rounded-lg text-lg text-white bg-purple-500 mr-[10px] hover:bg-purple-400 transition-colors">
                <FontAwesomeIcon className="mr-2" icon={faPlus} />
                Mời
              </button>
              <button className="font-medium flex py-2 px-4 rounded-lg text-lg  bg-gray-300 hover:bg-gray-200 mr-[10px] transition-colors">
                <img
                  className="translate-y-[30%] pr-1"
                  src={share}
                  alt=""
                ></img>
                <p>Chia sẻ</p>
              </button>
              <button className="font-medium py-2 px-4 rounded-lg text-lg  bg-gray-300 hover:bg-gray-200 transition-colors">
                <FontAwesomeIcon className="mr-2" icon={faPlus} />
                Đã tham gia
              </button>
            </div>
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
