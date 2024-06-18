import { format } from "date-fns";
import ThreeDot from "../../assets/svg/ThreeDot.svg";
import send from "../../assets/svg/Chatbox/send.svg";
import { useEffect, useRef, useState } from "react";
import CommentList from "../Comment/CommentList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import CommentButton from "../../assets/svg/CommentButton.svg";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import SaveButton from "../../assets/svg/SaveButton.svg";
import ShareButton from "../../assets/svg/ShareButton.svg";
import Batngo from "../../assets/svg/CenterDetailPost/Batngo.svg";
import Buon from "../../assets/svg/CenterDetailPost/Buon.svg";
import BuonCuoi from "../../assets/svg/CenterDetailPost/BuonCuoi.svg";
import PhanNo from "../../assets/svg/CenterDetailPost/PhanNo.svg";
import Thich from "../../assets/svg/CenterDetailPost/Thich.svg";
import ThuongThuong from "../../assets/svg/CenterDetailPost/ThuongThuong.svg";
import YeuThich from "../../assets/svg/CenterDetailPost/YeuThich.svg";
import DetailPostLikeButton from "../LikeButton/DetailLikeButton";
import Carousel from "react-material-ui-carousel";
import upload from "../../assets/svg/CenterDetailPost/add_photo_alternate_outlined.svg";
import { NotificationManager } from "react-notifications";
import APIPost from "../../api/post/APIPost";
import APIComment from "../../api/comment/APIComment";
import CommentForm from "../Comment/CommentForm";
import Comment from "../Comment/Comment";

export default function CenterDetailPost({
  post,
  changeLanguage,
  totalComment,
  totalShare,
  likes,
  icons,
}) {
  const imageUrl = "http://localhost:8000/storage/posts/";
  const [commentData, setCommentData] = useState({ post_id: post.id });
  const [parentComment, setParentComment] = useState(null);
  const [newComment, setNewComment] = useState(null);
  useEffect(() => {
    const fetchParent = async () => {
      try {
        const response = await APIComment.getParentComment(post.id);
        // Access the data from the response
        // console.log("parent comment:", response.data.data);
        setParentComment(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchParent();
  }, []);

  const [data, setData] = useState({ content: "", image: null });
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const maxHeight = 80;

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

  // useEffect(() => {
  //   autoResize();
  // }, [text]);

  console.log("center post", post);
  return (
    <div className="justify-center w-[920px] max-h-[560px] flex flex-col rounded-lg">
      {/* header */}
      <div className="text-center">
        <p className="font-semibold text-xl p-4 border-b">
          Bài viết của {post.user.username}
        </p>
      </div>
      {/* end-header */}
      {/* content */}
      <div className="flex flex-col w-w-[920px] overflow-auto">
        {/* postUser */}
        <div className=" flex justify-between ml-[12px] mt-[11px]">
          <div className="flex">
            <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-100">
              <img className="" src={post.user.avatar} alt="ảnh đại diện"></img>
            </div>

            <div className="my-[10px] flex flex-col">
              <p className="font-semibold text-xl">{post.user.username}</p>
              <p className="text-sm text-[#66676B]">
                {changeLanguage(
                  format(post.created_at, "d   MMMM yyyy, h:mm a")
                )}
              </p>
            </div>
          </div>
          <div className="">
            <img className="mt-[38px] mr-[35px]" src={ThreeDot} alt="" />
          </div>
        </div>
        {/* end postUser */}
        {/* textContent */}
        <div className="max-h-[80px] mx-[20px] mb-[10px]">
          <p>{post.post_text}</p>
        </div>
        {/* endtextContent */}

        {/* file-content */}
        {/* <div className="flex justify-center w-full max-h-[400px]">
          <img className="" src={post.post_file} alt="content"></img>
        </div> */}
        <div className="">
          {post?.pictures && (
            <>
              <Carousel stopAutoPlayOnHover autoPlay={false}>
                {post?.pictures.map(({ picture }) => (
                  // <Item key={i} item={item} />
                  <>
                    <div className="flex justify-center w-full max-h-[400px] ">
                      {post.id < 17 && (
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
                      )}
                    </div>
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
                className={`h-[450px] ${
                  post?.videos.length !== 0 ? "" : "hidden"
                }`}
              >
                {/* video content */}
                {post?.videos.map(({ video }) => (
                  <div className="flex justify-center w-full h-full max-h-[420px] ">
                    <video controls>
                      <source src={imageUrl + video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </Carousel>
            </>
          )}
        </div>
        {/* end-file-content */}

        {/* reatcions */}
        <div className="mt-[10px] reaction flex flex-row text-[#66676B] justify-between mx-[17px] pb-[9px] border-b">
          <div className="flex justify-center items-center">
            {reactions.map(({ name, svg, key }) => (
              <>
                {icons != null &&
                  icons.some((reaction) => reaction.reaction_id === key) && (
                    <div key={name}>
                      <img src={svg} alt=""></img>
                    </div>
                  )}
              </>
            ))}
            {likes != 0 && likes && (
              <p className="ml-[10px] text-xl mt-[1px]">{likes} lượt thích</p>
            )}
          </div>
          <p className="flex flex-row gap-[10px] items-center text-md mt-[px]">
            {totalComment != 0 && totalComment != null && (
              <p className="flex items-center gap-[10px] text-xl  ">
                {totalComment} <FontAwesomeIcon size="xl" icon={faComment} />
              </p>
            )}
            {totalShare != null && totalShare != 0 && (
              <p className="flex items-center gap-[5px]">
                {totalShare} <FontAwesomeIcon size="xl" icon={faShare} />
              </p>
            )}
          </p>
        </div>
        {/* end reactions */}

        {/* button */}

        <div className="button h-[44px] flex justify-around text-[#66676B] mx-[17px] mt-[10px]">
          <div className="w-[160px] h-[45px] mt-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
            <DetailPostLikeButton></DetailPostLikeButton>
          </div>

          <div className="w-[160px] h-[45px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
            <button className="flex flex-row gap-[5px]">
              <img
                className="text-lg mt-[8px]"
                src={CommentButton}
                alt=""
              ></img>
              <p className="text-lg font-semibold mt-[1px]">Bình luận</p>
            </button>
          </div>

          <div className="w-[160px] h-[45px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
            <button className="flex flex-row gap-[5px]">
              <img className="mt-[5px]" src={ShareButton} alt=""></img>

              <p className="text-lg font-semibold mt-[1px]">Chia sẻ</p>
            </button>
          </div>
          <div className="w-[160px] h-[45px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
            <button className="flex flex-row gap-[5px] ">
              <img className="mt-[8px]" src={SaveButton} alt=""></img>
              <p className="text-lg font-semibold mt-[1px]">Lưu bài</p>
            </button>
          </div>
        </div>
        {/* end button */}

        {/* commentlist */}
        {parentComment === null && (
          <div className="flex items-center justify-center mt-[10px]">
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </div>
        )}
        {parentComment !== null && (
          <div className="flex flex-col overflow-x-clip mb-[10px]">
            {parentComment && parentComment != null && (
              <CommentList commentsData={parentComment}></CommentList>
            )}
          </div>
        )}

        {/* end-comment-list */}
      </div>

      {/* end-content */}

      {/* comment-box */}
      <div className="min-h-[80px] border-t flex flex-row justify-center items-center px-2">
        <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-100">
          <img className=" " src={post.user.avatar} alt="" />
        </div>
        <CommentForm
          commentData={commentData}
          setParentComment={setParentComment}
          ListOfComments={parentComment}
          setComments={setParentComment}
          commentWidth="w-[600px]"
          post={post}
          userData={null}
        ></CommentForm>
      </div>
      {/* end-comment-box */}
    </div>
  );
}
