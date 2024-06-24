import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CenterDetailPost from "../Post/CenterDetailPost";
import Modal from "react-responsive-modal";

export default function AlbumTab({ posts }) {
  const [Imagedata, setImageData] = useState(null);
  const [openCenterPost, setOpenCenterPost] = useState(null);
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

  const imageUrl = "http://localhost:8000/storage/posts/";
  useEffect(() => {
    setImageData(posts);
  }, [posts]);

  return (
    <>
      {Imagedata != null && (
        <div className="w-[900px] min-h-[600px] mb-[50px] flex flex-col border rounded-xl p-2 bg-white">
          <div>
            <h1 className="text-lg font-semibold py-2 ml-[31px]">
              Ảnh của bạn
            </h1>
          </div>
          <div className="grid grid-cols-5 gap-y-[15px]">
            {Imagedata &&
              Imagedata.map((image) => (
                <NavLink
                  className={`hover:cursor-pointer ${
                    image?.videos?.length > 0 ? "hidden" : ""
                  }`}
                >
                  <div>
                    {/* {image?.pictures?.length > 1 &&
                      image?.pictures?.map((picture) => (
                        <img
                          onClick={() => setOpenCenterPost(picture["post_id"])}
                          key={picture?.id}
                          src={picture?.picture}
                          alt={picture?.post_id}
                          className="w-[160px] h-[160px] rounded-xl object-cover hover:"
                        />
                      ))} */}

                    {image?.pictures[0]?.picture?.includes("http") && (
                      <img
                        onClick={() => setOpenCenterPost(image["id"])}
                        key={image?.id}
                        src={image?.pictures[0]?.picture}
                        alt={image?.author}
                        className="w-[160px] h-[160px] rounded-xl object-cover hover:"
                      />
                    )}
                    {!image?.pictures[0]?.picture?.includes("http") &&
                      image?.pictures[0]?.picture != undefined && (
                        <img
                          onClick={() => setOpenCenterPost(image["id"])}
                          key={image?.id}
                          src={imageUrl + image?.pictures[0]?.picture}
                          alt={image?.author}
                          className="w-[160px] h-[160px] rounded-xl object-cover hover:"
                        />
                      )}
                    <Modal
                      classNames={{
                        overlay: "",
                        modal: "customModalCenterDetailPost",
                      }}
                      open={openCenterPost === image["id"]}
                      onClose={() => setOpenCenterPost(null)}
                      center
                    >
                      <CenterDetailPost
                        post={image}
                        open={openCenterPost}
                        userWhoLikeYourPost={image?.usersWhoLikeYourPost}
                        totalComment={image?.commentCount}
                        likes={image?.numberOfLike}
                        icons={image?.topReactions}
                        totalShare={image?.numberOfShare}
                        changeLanguage={replaceMonthsToVietnamese}
                      />
                    </Modal>
                  </div>
                </NavLink>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
