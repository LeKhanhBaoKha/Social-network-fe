import Batngo from "../../assets/svg/Batngo.svg";
import Buon from "../../assets/svg/Buon.svg";
import BuonCuoi from "../../assets/svg/BuonCuoi.svg";
import PhanNo from "../../assets/svg/PhanNo.svg";
import Thich from "../../assets/svg/Thich.svg";
import ThuongThuong from "../../assets/svg/ThuongThuong.svg";
import YeuThich from "../../assets/svg/YeuThich.svg";
export default function WhoLikeYourPost({ postReactions }) {
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
  return (
    <div className="my-[20px] flex max-h-[550px] flex-col justify-center pl-[20px] overflow-auto">
      {postReactions.map((postReaction) => (
        <div className="flex gap-[10px] items-center">
          <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-100">
            <img className="" src={postReaction.user.avatar} alt="" />
          </div>
          <p className="font-semibold text-lg">{postReaction.user.username}</p>
          {postReaction.reaction_id === 1 && (
            <div className="">
              <img src={Thich} alt="" />
            </div>
          )}
          {postReaction.reaction_id === 2 && (
            <div className="">
              <img src={BuonCuoi} alt="" />
            </div>
          )}
          {postReaction.reaction_id === 3 && (
            <div className="">
              <img src={YeuThich} alt="" />
            </div>
          )}
          {postReaction.reaction_id === 4 && (
            <div className="">
              <img src={ThuongThuong} alt="" />
            </div>
          )}
          {postReaction.reaction_id === 5 && (
            <div className="">
              <img src={Batngo} alt="" />
            </div>
          )}
          {postReaction.reaction_id === 6 && (
            <div className="">
              <img src={Buon} alt="" />
            </div>
          )}
          {postReaction.reaction_id === 7 && (
            <div className="">
              <img src={PhanNo} alt="" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
