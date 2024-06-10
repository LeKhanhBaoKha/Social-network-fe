import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../../assets/scss/components/DetailPost/DetailPost.scss";
import "../../assets/scss/components/CenterDetailPost/CenterDetailPost.scss";
import "../../assets/scss/components/WhoLikeYourPost/WhoLikeYourPost.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import Batngo from "../../assets/svg/Batngo.svg";
import Buon from "../../assets/svg/Buon.svg";
import BuonCuoi from "../../assets/svg/BuonCuoi.svg";
import PhanNo from "../../assets/svg/PhanNo.svg";
import Thich from "../../assets/svg/Thich.svg";
import ThuongThuong from "../../assets/svg/ThuongThuong.svg";
import YeuThich from "../../assets/svg/YeuThich.svg";
import CommentButton from "../../assets/svg/CommentButton.svg";
import SaveButton from "../../assets/svg/SaveButton.svg";
import ShareButton from "../../assets/svg/ShareButton.svg";
import DetailPost from "./DetailPost";
import { format } from "date-fns";
import CenterDetailPost from "./CenterDetailPost";
import PostLikeButton from "../LikeButton/LikeButton";
import ThreeDotButton from "../ThreedotButton/ThreedotButton";
import WhoLikeYourPost from "../WhoLikeYourPost/WhoLikeYourPost";
import GetDetails from "../../api/post/GetDetails";
import Carousel from "react-material-ui-carousel";
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

  const { details } = GetDetails(post.id);
  console.log("details", details);
  const totalShare = null;

  const [open, setOpen] = useState(null);
  const onOpenModal = (index) => setOpen(index);
  const onCloseModal = () => setOpen(null);

  const [openCenterPost, setOpenCenterPost] = useState(false);
  const onOpenCenterPost = () => {
    setOpenCenterPost(true);
  };
  const onCloseCenterPost = () => setOpenCenterPost(false);

  const [openLike, setOpenLike] = useState(false);
  const onOpenLikeModal = () => setOpenLike(true);
  const onCloseLikeModal = () => setOpenLike(false);

  const reactions = [
    {
      name: "Thích",
      key: 1,
      svg: Thich,
    },
    {
      name: "Phẫn nộ",
      key: 7,
      svg: PhanNo,
    },
    {
      name: "buồn",
      key: 6,
      svg: Buon,
    },
    {
      name: "Yêu thích",
      key: 3,
      svg: YeuThich,
    },
    {
      name: "thương thương",
      key: 4,
      svg: ThuongThuong,
    },
    {
      name: "bất ngờ",
      key: 5,
      svg: Batngo,
    },
    {
      name: "buồn cười",
      key: 2,
      svg: BuonCuoi,
    },
  ];

  const postOptions = [
    {
      name: "Ẩn bài viết",
      key: "hidden",
    },
    {
      name: "Xóa bài viết",
      key: "delete",
    },
  ];

  return (
    <div className="w-[560px] lg:w-[500px]   border rounded-2xl bg-white">
      {/* postUser */}
      <div className=" flex justify-between items-center ml-[12px] mt-[11px]">
        <div className="flex">
          <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-100">
            <img className="" src={post.user.avatar} alt="ảnh đại diện"></img>
          </div>

          <div className="my-[10px] flex flex-col">
            <p className="font-semibold text-lg">{post.user.username}</p>
            <p className="text-sm text-[#66676B]">
              {replaceMonthsToVietnamese(
                format(post.created_at, "d   MMMM yyyy, h:mm a")
              )}
            </p>
          </div>
          <div></div>
        </div>
        <div className=" mr-[25px]">
          <ThreeDotButton options={postOptions} post={post}></ThreeDotButton>
        </div>
      </div>
      {/* end postUser */}

      {/* textContent */}
      <div className="textContent w-[457px] max-h-[200px] mx-[20px] overflow-auto">
        <p>{post.post_text}</p>
      </div>
      {/* endtextContent */}

      {/* content */}
      <div className="max-h-[450px]">
        {post.pictures != null && (
          <>
            <Carousel stopAutoPlayOnHover autoPlay={false}>
              {post?.pictures.map(({ picture, id }) => (
                // <Item key={i} item={item} />
                <>
                  <div
                    onClick={() => onOpenModal(id)}
                    className="flex justify-center my-[13px] content max-w-[560px] lg:max-w-[500px] max-h-[450px] "
                  >
                    <img src={picture} alt="content"></img>
                  </div>
                  <Modal
                    classNames={{
                      overlay: "",
                      modal: "customModalDetailPost",
                    }}
                    open={open === id}
                    onClose={onCloseModal}
                    center
                  >
                    <DetailPost picture={picture} />
                  </Modal>
                </>
              ))}
            </Carousel>
          </>
        )}

        {post.videos !== null && (
          <>
            <Carousel
              stopAutoPlayOnHover
              autoPlay={false}
              className={`h-[310px] ${
                post?.videos.length !== 0 ? "" : "hidden"
              }`}
            >
              {/* video content */}
              {post?.videos.map(({ video }) => (
                <div className="flex justify-center my-[13px] content max-w-[560px] lg:max-w-[500px] max-h-[400px]">
                  <video controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </Carousel>
          </>
        )}
      </div>
      {/* end content */}

      {/* reatcions */}
      <div className="reaction flex flex-row text-[#66676B] justify-between items-center mx-[17px] pb-[9px] border-b">
        <div className="flex items-center">
          {reactions.map(({ name, svg, key }) => (
            <>
              {details?.topReactions &&
                details?.topReactions.some(
                  (reaction) => reaction.reaction_id === key
                ) && (
                  <div key={name}>
                    <img src={svg} alt=""></img>
                  </div>
                )}
            </>
          ))}
          {details?.numberOfLike != 0 && details?.numberOfLike && (
            // likes-modal
            <>
              <p
                onClick={onOpenLikeModal}
                className="text-xl mt-[1px] hover:cursor-pointer"
              >
                {details?.numberOfLike} lượt thích
              </p>
              {details?.usersWhoLikeYourPost && (
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
                    postReactions={details?.usersWhoLikeYourPost}
                  ></WhoLikeYourPost>
                </Modal>
              )}
            </>
          )}
        </div>
        <p className="flex flex-row gap-[10px] items-center text-md mt-[px]">
          {details?.commentCount != null && (
            <p className="flex items-center gap-[10px] text-xl">
              {details?.commentCount}
              <FontAwesomeIcon size="lg" icon={faComment} />
            </p>
          )}
          {totalShare != 0 && totalShare != null && (
            <p>
              {totalShare} <FontAwesomeIcon icon={faShare} />
            </p>
          )}
        </p>
      </div>
      {/* end reactions */}

      {/* button */}

      <div className="button w-[524px] lg:w-[464px] h-[44px] flex justify-between text-[#66676B] mx-[17px]">
        <div className="w-[111px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
          <PostLikeButton></PostLikeButton>
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
            totalComment={details?.commentCount}
            likes={details?.numberOfLike}
            icons={details?.topReactions}
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
