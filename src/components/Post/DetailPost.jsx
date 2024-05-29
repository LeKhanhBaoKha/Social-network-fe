import ThreeDot from "../../assets/svg/ThreeDot.svg";
import Batngo from "../../assets/svg/Batngo.svg";
import "../../assets/scss/components/DetailPost/DetailPost.scss";
import Buon from "../../assets/svg/Buon.svg";
import BuonCuoi from "../../assets/svg/BuonCuoi.svg";
import PhanNo from "../../assets/svg/PhanNo.svg";
import Thich from "../../assets/svg/Thich.svg";
import ThuongThuong from "../../assets/svg/ThuongThuong.svg";
import YeuThich from "../../assets/svg/YeuThich.svg";
import CommentButton from "../../assets/svg/CommentButton.svg";
import LikeButton from "../../assets/svg/LikeButton.svg";
import SaveButton from "../../assets/svg/SaveButton.svg";
import ShareButton from "../../assets/svg/ShareButton.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
export default function DetailPost({ post }) {
  function replaceMonthsToVietnamese(text) {
    const monthsEnglishToVietnamese = {
      January: "Tháng Một",
      February: "Tháng Hai",
      March: "Tháng Ba",
      April: "Tháng Tư",
      May: "Tháng Năm",
      June: "Tháng Sáu",
      July: "Tháng Bảy",
      August: "Tháng Tám",
      September: "Tháng Chín",
      October: "Tháng Mười",
      November: "Tháng Mười Một",
      December: "Tháng Mười Hai",
    };
    const regex = new RegExp(
      Object.keys(monthsEnglishToVietnamese).join("|"),
      "gi"
    );
    return text.replace(regex, (matched) => monthsEnglishToVietnamese[matched]);
  }

  const reactions = [
    {
      name: "Like",
      svg: Thich,
    },
    {
      name: "Phẫn nộ",
      svg: PhanNo,
    },
    {
      name: "buồn",
      svg: Buon,
    },
    {
      name: "Yêu thích",
      svg: YeuThich,
    },
    {
      name: "thương thương",
      svg: ThuongThuong,
    },
    {
      name: "bất ngờ",
      svg: Batngo,
    },
    {
      name: "buồn cười",
      svg: BuonCuoi,
    },
  ];
  return (
    <div className="w-screen h-screen flex lg:flex-row flex-col ">
      {/* Content */}
      <div className="w-[980px] h-[620px]  bg-black flex justify-center border-r">
        <img
          className="w-auto h-auto max-w-full max-h-full object-contain"
          src={post.post_file}
          alt=""
        />
      </div>
      {/* end-Content */}

      {/* Post */}
      <div className="w-[350px] flex flex-col">
        {/* posthead */}
        <div className="w-[350px] flex justify-between ml-[12px] mt-[11px] bg-white">
          <div className="flex">
            <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-100">
              <img className="" src={post.user.avatar} alt="ảnh đại diện"></img>
            </div>
            <div className="my-[10px] flex flex-col">
              <p className="">{post.user.username}v</p>
              <p className="text-sm text-[#66676B]">
                {replaceMonthsToVietnamese(
                  format(post.created_at, "d   MMMM yyyy, h:mm a")
                )}
              </p>
            </div>
          </div>

          <div className="">
            <img className="mt-[38px] mr-[35px]" src={ThreeDot} alt="" />
          </div>
        </div>
        <div className="textContent w-[457px] max-h-[80px] mx-[20px] mb-[10px] overflow-auto">
          <p>{post.post_text}</p>
        </div>
        {/* end-PostHead */}
        {/* reatcions */}
        <div className="w-[350px] flex flex-row text-[#66676B] justify-between mx-[17px] pb-[9px] border-b">
          <div className="flex">
            {reactions.map(({ name, svg }) => (
              <div key={name}>
                <img src={svg} alt=""></img>
              </div>
            ))}
            <p className="text-sm mt-[1px]">Name và 410 người khác</p>
          </div>
        </div>
        {/* end reactions */}

        {/* button */}
        <div className="w-[350px] lg:w-[350px] h-[44px] flex justify-between text-[#66676B] mx-[17px] border-b">
          <div className="w-[111px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
            <button className="flex flex-row gap-[5px]">
              <img src={LikeButton} alt=""></img>
              <p className="text-sm mt-[1px]">Thích</p>
            </button>
          </div>

          <div className="w-[111px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
            <button className="flex flex-row gap-[5px]">
              <img className="mt-[2px]" src={CommentButton} alt=""></img>
              <p className="text-sm mt-[1px]">Bình luận</p>
            </button>
          </div>

          <div className="w-[111px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
            <button className="flex flex-row gap-[5px]">
              <img src={ShareButton} alt=""></img>

              <p className="text-sm mt-[1px]">Chia sẻ</p>
            </button>
          </div>

          <div className="w-[111px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
            <button className="flex flex-row gap-[5px] ">
              <img className="mt-[2px]" src={SaveButton} alt=""></img>
              <p className="text-sm mt-[1px]">Lưu bài</p>
            </button>
          </div>
        </div>
        {/* end button */}
      </div>

      {/* end-Post */}
    </div>
  );
}
