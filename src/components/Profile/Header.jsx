import bg_img from "./svg/bg_img.jpg";
import avatar from "./svg/anhdaidien.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function ProfileHeader() {
  return (
    <div className="w-screen">
      {/* background-img */}
      <div className=" w-[940px] h-[400px] overflow-hidden rounded-xl">
        <img className="" src={bg_img} />
      </div>
      {/* end background-img */}

      {/* user */}
      <div className="flex mx-8 justify-between w-[876px]">
        <div className="flex">
          {/* avatar */}
          <div className="border-[5px] border-white translate-y-[-30%] w-[168px] h-[168px] overflow-hidden rounded-full">
            <img className="" src={avatar} />
          </div>
          {/* name */}
          <div className="mx-3 my-5">
            <h1 className="font-bold text-4xl">Bảo Kha</h1>
            <p className="text-gray-500">Bạn bè</p>
          </div>
        </div>

        {/* button */}
        <div className="my-10">
          <button className="p-2 bg-gray-300 rounded-lg text-lg text-white bg-purple-500 mr-[10px] hover:bg-purple-400 transition-colors">
            <FontAwesomeIcon className="mr-2" icon={faPlus} />
            Thêm vào tin
          </button>
          <button className="p-2 bg-gray-300 rounded-lg text-lg  bg-gray-300 hover:bg-gray-200 transition-colors">
            <FontAwesomeIcon className="mr-2" icon={faPlus} />
            Chỉnh sửa trang cá nhân
          </button>
        </div>
      </div>
      {/* end user */}

      {/* tabs */}
      <div className=""></div>
      {/* end tabs */}
    </div>
  );
}
