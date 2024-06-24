import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CenterDetailPost from "../Post/CenterDetailPost";
import Modal from "react-responsive-modal";

export default function ProfileAlbum({ posts, setActiveTab }) {
  const [Imagedata, setImageData] = useState();
  const [openCenterPost, setOpenCenterPost] = useState(null);
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
  useEffect(() => {
    setImageData(posts);
  }, []);
  return (
    <>
      {posts && (
        <div className="w-[560px] lg:w-[360px] max-h-[420px] overflow-hidden border rounded-xl bg-white">
          <div className="m-4 flex gap-[10px] flex-col">
            <div className="flex justify-between">
              <h1 className="font-bold text-lg p-2">Ảnh</h1>
              <NavLink>
                <button
                  onClick={() => setActiveTab("/Image")}
                  className="w-[150px] p-2 hover:bg-gray-200 rounded-lg text-lg transition-colors"
                >
                  Xem tất cả ảnh
                </button>
              </NavLink>
            </div>
            <div className="grid grid-cols-3 gap-4 rounded-xl">
              {posts &&
                posts?.map((image) => (
                  <NavLink
                    className={`hover:cursor-pointer ${
                      image?.videos?.length > 0 ? "hidden" : ""
                    }`}
                  >
                    <div>
                      {image?.pictures[0]?.picture?.includes("http") && (
                        <img
                          onClick={() => setOpenCenterPost(image["id"])}
                          key={image?.id}
                          src={
                            image?.pictures[0]?.picture.includes("http")
                              ? image?.pictures[0]?.picture
                              : imageUrl + image?.pictures[0]?.picture
                          }
                          alt={image?.id}
                          className="w-[150px] h-[150px] lg:w-[100px] lg:h-[100px] rounded-xl object-cover"
                        />
                      )}
                      {!image?.pictures[0]?.picture?.includes("http") &&
                        image?.pictures[0]?.picture != undefined && (
                          <img
                            onClick={() => setOpenCenterPost(image["id"])}
                            key={image?.id}
                            src={imageUrl + image?.pictures[0]?.picture}
                            alt={image?.id}
                            className="w-[150px] h-[150px] lg:w-[100px] lg:h-[100px] rounded-xl object-cover"
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
        </div>
      )}
    </>
  );
}
