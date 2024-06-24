import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function VideoTab({ posts }) {
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
    <div className="w-[900px] mb-[50px] flex flex-col border rounded-xl p-2 pb-6 bg-white">
      <div>
        <h1 className="text-lg font-semibold py-2 ml-[31px]">Video của bạn</h1>
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-y-[10px] ">
        {Imagedata &&
          Imagedata.map((image) => (
            <NavLink
              className={`hover:cursor-pointer ${
                image?.pictures?.length > 0 ? "hidden" : ""
              }`}
            >
              {image?.videos?.length > 0 && (
                <div className="flex justify-center w-[280px] h-[180px] ">
                  <video controls>
                    <source
                      src={imageUrl + image?.videos[0]?.video}
                      type="video/mp4"
                    />
                  </video>
                </div>
              )}
            </NavLink>
          ))}
      </div>
    </div>
  );
}
