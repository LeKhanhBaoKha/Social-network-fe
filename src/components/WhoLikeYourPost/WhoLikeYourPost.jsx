import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Batngo from "../../assets/svg/Batngo.svg";
import "../../assets/scss/components/ConfirmModal/ConfirmModal.scss";
import Buon from "../../assets/svg/Buon.svg";
import BuonCuoi from "../../assets/svg/BuonCuoi.svg";
import PhanNo from "../../assets/svg/PhanNo.svg";
import Thich from "../../assets/svg/Thich.svg";
import ThuongThuong from "../../assets/svg/ThuongThuong.svg";
import YeuThich from "../../assets/svg/YeuThich.svg";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "react-responsive-modal";
import APIProfile from "../../api/APIProfile";
import { NotificationManager } from "react-notifications";
export default function WhoLikeYourPost({ postReactions, yourFriend }) {
  const [friends, setFriends] = useState(yourFriend);
  const [openDelete, setOpenDelete] = useState(null);
  const handleDelete = async (related_user_id) => {
    console.log(related_user_id);
    try {
      const response = await APIProfile.unfriend({ related_user_id });
      console.log("response", response);
      if (response?.data?.meta?.statusCode === 200) {
        NotificationManager.success(response?.data?.meta?.message);
        setFriends(friends.filter((friend) => friend.id !== related_user_id));
      } else {
        NotificationManager.error(response?.data?.meta?.message);
      }
    } catch (error) {
      NotificationManager.error(error?.response?.data?.meta?.message);
      console.error("Error:", error);
    }
    setOpenDelete(false);
  };

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
    <>
      <div className="my-[20px] flex max-h-[550px] flex-col justify-center pl-[20px] overflow-auto">
        {postReactions?.map((postReaction) => (
          <div className="flex gap-[10px] items-center">
            <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-300">
              <img className="" src={postReaction?.user?.avatar} alt="" />
            </div>
            <p className="font-semibold text-lg hover-underline-animation">
              {postReaction?.first_name + " " + postReaction?.last_name}
            </p>
            {postReaction?.reaction_id === 1 && (
              <div className="">
                <img src={Thich} alt="" />
              </div>
            )}
            {postReaction?.reaction_id === 2 && (
              <div className="">
                <img src={BuonCuoi} alt="" />
              </div>
            )}
            {postReaction?.reaction_id === 3 && (
              <div className="">
                <img src={YeuThich} alt="" />
              </div>
            )}
            {postReaction?.reaction_id === 4 && (
              <div className="">
                <img src={ThuongThuong} alt="" />
              </div>
            )}
            {postReaction?.reaction_id === 5 && (
              <div className="">
                <img src={Batngo} alt="" />
              </div>
            )}
            {postReaction?.reaction_id === 6 && (
              <div className="">
                <img src={Buon} alt="" />
              </div>
            )}
            {postReaction?.reaction_id === 7 && (
              <div className="">
                <img src={PhanNo} alt="" />
              </div>
            )}
          </div>
        ))}
        {friends?.map((friend, index) => (
          <div key={friend["id"]}>
            <div
              onClick={() => setOpenDelete(friend["id"])}
              className="flex flex-row items-center gap-[50px]"
            >
              <div className="flex gap-[10px] items-center w-[240px] overflow-x-auto">
                <div className="m-[10px] w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-100">
                  <img className="" src={friend?.avatar} alt="" />
                </div>
                <p className="font-semibold text-lg hover-underline-animation">
                  {" "}
                  {friend?.first_name + " " + friend?.last_name}
                </p>
              </div>
              <div className="font-medium rounded-lg text-lg  bg-gradient-to-br from-red-400 to-red-500 text-white hover:transition-colors duration-300 px-4 py-2 hover:to-red-600">
                <FontAwesomeIcon className="mr-2" icon={faXmark} />
                <p className="hover-underline-animation hover:cursor-pointer ">
                  Hủy kết bạn
                </p>
              </div>
            </div>
            <div>
              <Modal
                classNames={{
                  overlay: "",
                  modal: "confirmModal",
                }}
                open={openDelete === friend["id"]}
                onClose={() => setOpenDelete(null)}
                center
              >
                <div className="flex flex-col items-center justify-center">
                  <p className="p-2 text-lg font-semibold mt-[20px]">
                    Bạn có chắc hủy kết bạn với{" "}
                    {friend?.first_name + " " + friend?.last_name} ?
                  </p>
                  <div className="flex gap-[60px] mt-[10px]">
                    <button
                      onClick={() => handleDelete(friend.id)}
                      className="px-4 py-2 rounded-xl bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 transition-colors"
                    >
                      Có
                    </button>
                    <button
                      onClick={() => setOpenDelete(null)}
                      className="px-4 py-2 rounded-xl bg-red-500 text-white text-lg font-semibold hover:bg-red-600 transition-colors"
                    >
                      Không
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
