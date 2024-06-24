import React, { useEffect, useState } from "react";
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
import LazyLoad from "react-lazy-load";
import APIPost from "../../api/post/APIPost";
import { NotificationManager } from "react-notifications";
import { NavLink } from "react-router-dom";

const Post = ({ postData, sharePost, user_id, userPost }) => {
  const imageUrl = "http://localhost:8000/storage/posts/";
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
  const [post, setPost] = useState(postData);
  const [open, setOpen] = useState(null);
  const onOpenModal = (index) => setOpen(index);
  const onCloseModal = () => setOpen(null);

  const [openCenterPost, setOpenCenterPost] = useState(false);
  const onOpenCenterPost = () => {
    setOpenCenterPost(true);
  };
  const onCloseCenterPost = () => setOpenCenterPost(false);

  const [openShare, setOpenShare] = useState(false);
  const onOpenShare = () => {
    setOpenShare(true);
  };
  const onCloseShare = () => setOpenShare(false);
  const handleShare = async (post_id) => {
    try {
      const response = await APIPost.share(post_id);
      console.log("response", response);
      if (response?.data?.meta?.statusCode === 200) {
        NotificationManager.success(response?.data?.meta?.message);
      } else {
        NotificationManager.error(response?.data?.meta?.message);
      }
    } catch (error) {
      NotificationManager.error(error?.response?.data?.meta?.message);
      console.error("Error:", error);
    }
    setOpenShare(false);
  };

  const [openLike, setOpenLike] = useState(false);
  const onOpenLikeModal = () => setOpenLike(true);
  const onCloseLikeModal = () => setOpenLike(false);

  const [userId, setUserId] = useState(user_id);

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

  var postOptions = [
    {
      name: "Chỉnh sửa",
      key: "edit",
    },
    {
      name: "Ẩn bài viết",
      key: "hidden",
    },
    {
      name: "Xóa bài viết",
      key: "delete",
    },
  ];

  if (sharePost === true) {
    postOptions = [
      {
        name: "Xóa bài viết",
        key: "delete",
      },
    ];
  } else {
    postOptions = [
      {
        name: "Chỉnh sửa",
        key: "edit",
      },
      {
        name: "Ẩn bài viết",
        key: "hidden",
      },
      {
        name: "Xóa bài viết",
        key: "delete",
      },
    ];
  }

  return (
    <>
      {post && (
        <div className="w-[560px] lg:w-[500px]   border rounded-2xl bg-white">
          {/* postUser */}
          <div className=" flex justify-between items-center ml-[12px] mt-[11px]">
            <div className="flex">
              <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-100">
                {/* <img
                  className=""
                  src={post?.user?.avatar}
                  alt="ảnh đại diện"
                ></img> */}
                {post?.user?.avatar.includes("http") ? (
                  <img
                    className="object-contain"
                    src={post?.user?.avatar}
                    alt=""
                  />
                ) : (
                  <img
                    className="object-contain"
                    src={imageUrl + post?.user?.avatar}
                    alt=""
                  />
                )}
              </div>

              <div className="my-[10px] flex flex-col">
                <NavLink to={`/profile/${post?.user?.id}`} className="">
                  <p className="font-semibold text-lg hover:cursor-pointer hover-underline-animation">
                    {post?.user?.first_name + " " + post?.user?.last_name}
                  </p>
                </NavLink>
                <p className="text-sm text-[#66676B]">
                  {replaceMonthsToVietnamese(
                    format(post?.created_at, "d MMMM yyyy, h:mm a")
                  )}
                </p>
              </div>
              <div></div>
            </div>
            <div className=" mr-[25px]">
              <ThreeDotButton
                user_id={user_id}
                sharePost={sharePost}
                options={postOptions}
                post={post}
                setPost={setPost}
              ></ThreeDotButton>
            </div>
          </div>
          {/* end postUser */}

          {/* textContent */}
          <div className="textContent w-[457px] max-h-[200px] mx-[20px] overflow-auto">
            <p>{post?.post_text}</p>
          </div>
          {/* endtextContent */}

          {/* content */}
          <div className="max-h-[1300px] overflow-auto">
            {post?.pictures != null && (
              <div className="max-h-[500px] z-10">
                <Carousel stopAutoPlayOnHover autoPlay={false}>
                  {post?.pictures.map(({ picture, id }) => (
                    // <Item key={i} item={item} />
                    <div key={id}>
                      <LazyLoad offset={100}>
                        <div
                          onClick={() => onOpenModal(id)}
                          className="flex justify-center my-[13px] content max-w-[560px] max-h-[430px] "
                        >
                          {/* {post.id < 17 && (
                    <img
                      className="object-contain"
                      src={picture}
                      alt="content"
                    ></img>
                  )}
                  {post.id >= 17 && (
                    <img
                      className="object-contain"
                      src={imageUrl + picture}
                      alt="content"
                    ></img>
                  )} */}

                          {picture.includes("http") ? (
                            <img
                              className="object-contain"
                              src={picture}
                              alt=""
                            />
                          ) : (
                            <img
                              className="object-contain"
                              src={imageUrl + picture}
                              alt=""
                            />
                          )}
                        </div>
                      </LazyLoad>

                      <Modal
                        key={id}
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
                    </div>
                  ))}
                </Carousel>
              </div>
            )}

            {post?.videos !== null && (
              <div className="max-h-[600px]">
                <Carousel
                  indicators={true}
                  stopAutoPlayOnHover
                  autoPlay={false}
                  key={post?.videos?.length}
                  className={`h-[310px] ${
                    post?.videos?.length !== 0 ? "" : "hidden"
                  }`}
                >
                  {/* video content */}
                  {post.videos.map(({ video }, index) => (
                    <LazyLoad offset={100}>
                      <div
                        key={index}
                        className="flex justify-center my-[13px] content max-w-[560px] lg:max-w-[500px] max-h-[300px]"
                      >
                        <video controls>
                          <source src={imageUrl + video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </LazyLoad>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
          {/* end content */}

          {/* reatcions */}
          <div className="reaction flex flex-row text-[#66676B] justify-between items-center mx-[17px] pb-[9px] border-b">
            <div className="flex items-center">
              {reactions?.map(({ name, svg, key }) => (
                <>
                  {post?.topReactions &&
                    post?.topReactions.some(
                      (reaction) => reaction.reaction_id === key
                    ) && (
                      <div key={name}>
                        <img src={svg} alt=""></img>
                      </div>
                    )}
                </>
              ))}
              {post?.numberOfLike != 0 && post?.numberOfLike && (
                // likes-modal
                <>
                  <p
                    onClick={onOpenLikeModal}
                    className="text-xl mt-[1px] hover:cursor-pointer"
                  >
                    {post?.numberOfLike} lượt thích
                  </p>
                  {post?.usersWhoLikeYourPost && (
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
                        postReactions={post?.usersWhoLikeYourPost}
                      ></WhoLikeYourPost>
                    </Modal>
                  )}
                </>
              )}
            </div>
            <p className="flex flex-row gap-[10px] items-center text-md mt-[px]">
              {post?.commentCount != null && (
                <p className="flex items-center gap-[10px] text-xl">
                  {post?.commentCount}
                  <FontAwesomeIcon size="lg" icon={faComment} />
                </p>
              )}
              {post?.numberOfShare != 0 && post?.numberOfShare != null && (
                <p>
                  {post?.numberOfShare} <FontAwesomeIcon icon={faShare} />
                </p>
              )}
            </p>
          </div>
          {/* end reactions */}

          {/* button */}

          <div className="button w-[524px] lg:w-[464px] h-[44px] flex justify-around text-[#66676B] mx-[17px]">
            <div className="w-[150px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
              <PostLikeButton post={post}></PostLikeButton>
            </div>

            <div className="w-[150px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
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
                setPost={setPost}
                sharePost={sharePost}
                open={openCenterPost}
                userWhoLikeYourPost={post?.usersWhoLikeYourPost}
                totalComment={post?.commentCount}
                likes={post?.numberOfLike}
                icons={post?.topReactions}
                totalShare={post?.numberOfShare}
                changeLanguage={replaceMonthsToVietnamese}
              />
            </Modal>

            {userPost !== true && (
              <div
                onClick={() => setOpenShare(true)}
                className="w-[150px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg"
              >
                <button className="flex flex-row gap-[5px]">
                  <img src={ShareButton} alt=""></img>

                  <p className="text-sm mt-[1px]">Chia sẻ</p>
                </button>
              </div>
            )}

            <Modal
              classNames={{
                overlay: "",
                modal: "confirmModal",
              }}
              open={openShare}
              onClose={() => setOpenShare(false)}
              center
            >
              <div className="flex flex-col items-center justify-center">
                <p className="p-2 text-lg font-semibold mt-[20px]">
                  Bạn muốn chia sẻ bài viết này?
                </p>
                <div className="flex gap-[60px] mt-[10px]">
                  <button
                    onClick={() => handleShare(post.id)}
                    className="px-4 py-2 rounded-xl bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Có
                  </button>
                  <button
                    onClick={() => setOpenShare(false)}
                    className="px-4 py-2 rounded-xl bg-red-500 text-white text-lg font-semibold hover:bg-red-600 transition-colors"
                  >
                    Không
                  </button>
                </div>
              </div>
            </Modal>
            {/* <div className="w-[111px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
              <button className="flex flex-row gap-[5px] ">
                <img className="mt-[2px]" src={SaveButton} alt=""></img>
                <p className="text-sm mt-[1px]">Lưu bài</p>
              </button>
            </div> */}
          </div>
          {/* end button */}
        </div>
      )}
    </>
  );
};
export default Post;
