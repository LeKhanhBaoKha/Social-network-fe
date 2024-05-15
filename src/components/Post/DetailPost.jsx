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
export default function DetailPost() {
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
      <div className="w-[980px] bg-black flex justify-center">
        <img
          className="w-[80%]"
          src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/310065334_1759325007734978_135254363420981357_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WrgwvE8mNdcQ7kNvgHDAB_7&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYA4QY1-cDpEZPzMrvWgvC_h-L-njCryy3T1AplIQwCAUg&oe=664A5A23"
          alt=""
        />
      </div>
      {/* end-Content */}

      {/* Post */}
      <div className="w-[350px] flex flex-col">
        {/* posthead */}
        <div className="w-[350px] flex justify-between ml-[12px] mt-[11px] bg-white">
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
              <p className="text-sm text-[#66676B]">Hôm qua lúc 14:23</p>
            </div>
          </div>

          <div className="">
            <img className="mt-[38px] mr-[35px]" src={ThreeDot} alt="" />
          </div>
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
