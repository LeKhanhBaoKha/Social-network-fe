import YeuThich from "../../assets/svg/Profile/svg/YeuThich.svg";
import Home from "../../assets/svg/Profile/svg/Home.svg";
import Location from "../../assets/svg/Profile/svg/location.svg";
import Education from "../../assets/svg/Profile/svg/education.svg";
export function Introduction() {
  const data = {
    studied_at: "Từng học tại Cao đẳng cao thắng",
    LiveIn: "Sống tại Bảo Lộc",
    ComeFrom: "Đến từ Bảo Lộc",
    Relationship: "Độc thân",
  };


  return (
    <div className="w-[560px] lg:w-[360px] min-h-[350px] bg-white border rounded-xl">

      <div className="m-4 flex gap-[10px] flex-col">
        <h1 className="font-bold text-lg">Giới thiệu</h1>
        <button className="w-full p-2 bg-gray-300 rounded-lg text-lg hover:bg-gray-200 transition-colors">
          Thêm tiểu sử
        </button>
        <ul className="flex flex-col gap-[5px]">
          {Object.entries(data).map(([key, value]) => (
            <li className="w-full flex" key={key}>
              {key == "studied_at" && (
                <img className="ml-[4px]" src={Education} alt="" />
              )}
              {key == "LiveIn" && (
                <img className="ml-[5px]" src={Home} alt="" />
              )}
              {key == "ComeFrom" && (
                <img className="ml-[5px]" src={Location} alt="" />
              )}
              {key == "Relationship" && (
                <img className="ml-[2px]" src={YeuThich} alt="" />
              )}

              <p className="ml-[5px] mt-[4px]">{value}</p>
            </li>
          ))}
        </ul>
        <button className="w-full p-2 bg-gray-300 rounded-lg text-lg hover:bg-gray-200 transition-colors">
          Chỉnh sửa chi tiết
        </button>
      </div>
    </div>
  );
}
