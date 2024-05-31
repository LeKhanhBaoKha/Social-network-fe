import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../../assets/scss/components/DetailPost/DetailPost.scss";
import "../../assets/scss/components/CenterDetailPost/CenterDetailPost.scss";
import tigerImage from "../../assets/images/tiger.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import Batngo from "../../assets/svg/Batngo.svg";
import Buon from "../../assets/svg/Buon.svg";
import ThreeDot from "../../assets/svg/ThreeDot.svg";
import BuonCuoi from "../../assets/svg/BuonCuoi.svg";
import PhanNo from "../../assets/svg/PhanNo.svg";
import Thich from "../../assets/svg/Thich.svg";
import ThuongThuong from "../../assets/svg/ThuongThuong.svg";
import YeuThich from "../../assets/svg/YeuThich.svg";
import CommentButton from "../../assets/svg/CommentButton.svg";
import LikeButton from "../../assets/svg/LikeButton.svg";
import SaveButton from "../../assets/svg/SaveButton.svg";
import ShareButton from "../../assets/svg/ShareButton.svg";
import DetailPost from "./DetailPost";
import { format } from "date-fns";
import CenterDetailPost from "./CenterDetailPost";

const Post = ({ post }) => {
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
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [openCenterPost, setOpenCenterPost] = useState(false);
  const onOpenCenterPost = () => setOpenCenterPost(true);
  const onCloseCenterPost = () => setOpenCenterPost(false);

  console.log("Post info", post);
  console.log("Post user", post.user.username);

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
    <div className="w-[560px] lg:w-[500px]   border rounded-2xl bg-white">
      {/* postUser */}
      <div className=" flex justify-between ml-[12px] mt-[11px]">
        <div className="flex">
          <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-100">
            <img className="" src={post.user.avatar} alt="ảnh đại diện"></img>
          </div>

          <div className="my-[10px] flex flex-col">
            <p className="">{post.user.username}</p>
            <p className="text-sm text-[#66676B]">
              {replaceMonthsToVietnamese(
                format(post.created_at, "d   MMMM yyyy, h:mm a")
              )}
            </p>
          </div>
          <div></div>
        </div>
        <div className="">
          <img className="mt-[38px] mr-[35px]" src={ThreeDot} alt="" />
        </div>
      </div>
      {/* end postUser */}

      {/* textContent */}
      <div className="textContent w-[457px] max-h-[80px] mx-[20px] overflow-auto">
        <p>{post.post_text}</p>
      </div>
      {/* endtextContent */}

      {/* content */}

      <div
        onClick={onOpenModal}
        className="flex justify-center my-[13px] content max-w-[560px] lg:max-w-[500px] max-h-[400px]"
      >
        <img src={post.post_file} alt="content"></img>
      </div>
      <Modal
        classNames={{
          overlay: "",
          modal: "customModalDetailPost",
        }}
        open={open}
        onClose={onCloseModal}
        center
      >
        <DetailPost post={post} />
      </Modal>
      {/* end content */}

      {/* reatcions */}
      <div className="reaction flex flex-row text-[#66676B] justify-between mx-[17px] pb-[9px] border-b">
        <div className="flex">
          {reactions.map(({ name, svg }) => (
            <div key={name}>
              <img src={svg} alt=""></img>
            </div>
          ))}
          <p className="text-sm mt-[1px]">Name và 410 người khác</p>
        </div>
        <p className="text-sm mt-[px]">
          333 <FontAwesomeIcon icon={faComment} /> 100{" "}
          <FontAwesomeIcon icon={faShare} />
        </p>
      </div>
      {/* end reactions */}

      {/* button */}

      <div className="button w-[524px] lg:w-[464px] h-[44px] flex justify-between text-[#66676B] mx-[17px]">
        <div className="w-[111px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
          <button className="flex flex-row gap-[5px]">
            <img src={LikeButton} alt=""></img>
            <p className="text-sm mt-[1px]">Thích</p>
          </button>
        </div>

        <div className="w-[111px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
          <button
            onClick={onOpenCenterPost}
            className="flex flex-row gap-[5px]"
          >
            <img className="mt-[2px]" src={CommentButton} alt=""></img>
            <p className="text-sm mt-[1px]">Bình luận</p>
          </button>
        </div>

        <Modal
          classNames={{
            overlay: "",
            modal: "customModalCenterDetailPost",
          }}
          open={openCenterPost}
          onClose={onCloseCenterPost}
          center
        >
          <CenterDetailPost
            post={post}
            changeLanguage={replaceMonthsToVietnamese}
          />
        </Modal>

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
  );
};
export default Post;
