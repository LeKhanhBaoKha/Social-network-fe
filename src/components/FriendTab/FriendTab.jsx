import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import APIProfile from "../../api/APIProfile";
import { NotificationManager } from "react-notifications";
import Modal from "react-responsive-modal";
import { forEach } from "lodash";

export default function FriendTab({ friends, setFriends, setActiveTab }) {
  const [FriendsData, setFriendsData] = useState(null);
  const [openDelete, setOpenDelete] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleDelete = async (related_user_id) => {
    console.log(related_user_id);
    try {
      const response = await APIProfile.unfriend({ related_user_id });
      console.log("response", response);
      if (response?.data?.meta?.statusCode === 200) {
        NotificationManager.success(response?.data?.meta?.message);
        setFriendsData(
          FriendsData.filter((friend) => friend.id !== related_user_id)
        );
      } else {
        NotificationManager.error(response?.data?.meta?.message);
      }
    } catch (error) {
      NotificationManager.error(error?.response?.data?.meta?.message);
      console.error("Error:", error);
    }
    setOpenDelete(false);
  };

  const handleFind = (event) => {
    if (event.keyCode === 13) {
      // Perform action on Enter key press
      console.log("Enter key pressed:", inputValue);
      event.preventDefault();
      FriendsData.map((friends) => {
        // console.log(
        //   (friends.first_name + " " + friends.last_name)
        //     .replace(/\s+/g, " ")
        //     .toLowerCase()
        // );
        // console.log(inputValue.replace(/\s+/g, " ").toLowerCase());
        console.log(
          (friends.first_name + " " + friends.last_name)
            .replace(/\s+/g, " ")
            .toLowerCase()
            .includes(inputValue.replace(/\s+/g, " ").toLowerCase())
        );
        if (
          (friends.first_name + " " + friends.last_name)
            .replace(/\s+/g, " ")
            .toLowerCase()
            .includes(inputValue.replace(/\s+/g, " ").toLowerCase())
        ) {
          console.log("Tim thay", inputValue);
          setFriendsData([friends]);
        } else {
          console.log("ko thay", inputValue);
        }
      });
      // You can clear the input, submit a form, etc.
    }
  };
  useEffect(() => {
    if (FriendsData == null) {
      setFriendsData(friends);
    } else {
      setFriendsData(FriendsData);
    }
  }, [FriendsData]);

  return (
    <>
      {FriendsData != null && (
        <div className="w-[900px] min-h-[600px] mb-[50px] flex flex-col border rounded-xl p-2 bg-white">
          <div className="flex w-[600px] gap-[100px] mx-[31px]">
            <h1 className="text-lg font-semibold py-2">Bạn bè</h1>
            <div className="flex justify-center items-center">
              <form className="w-[300px] mx-auto">
                <div className="flex">
                  <div className="translate-x-6  start-0 flex items-center ps-3 pointer-events-none">
                    <FontAwesomeIcon
                      className="text-gray-500"
                      icon={faSearch}
                    />
                  </div>
                  <input
                    id="find"
                    className="w-[300px] h-[30px] outline-none bg-slate-100 rounded-[20px] pl-[28px] pr-[28px]"
                    placeholder="Tìm kiếm..."
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleFind}
                  />
                </div>
              </form>
              <p
                className="hover:cursor-pointer ml-[10px] font-semibold text-lg hover-underline-animation"
                onClick={() => setFriendsData(friends)}
              >
                Hiển thị tất cả
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 m-[31px] gap-[20px] my-[10px]">
            {FriendsData &&
              FriendsData?.map((friend) => (
                <NavLink className="hover:cursor-pointer">
                  <div className="w-[400px] flex flex-row justify-between items-center border p-4 rounded-xl">
                    <NavLink
                      to={`/profile/${friend.id}`}
                      className="flex flex-row items-center gap-[10px]"
                    >
                      <img
                        className="w-[150px] h-[150px] lg:w-[100px] lg:h-[100px] rounded-xl object-cover hover:cursor-pointer "
                        key={friend.id}
                        src={friend.avatar}
                        alt={friend.username}
                      />
                      <div className="flex flex-col">
                        <h1 className="text-lg font-semibold max-w-[100px] max-h-[55px] overflow-hidden">
                          {friend.first_name + " " + friend.last_name}
                        </h1>
                      </div>
                    </NavLink>
                    <div
                      onClick={() => setOpenDelete(friend["id"])}
                      className="font-medium rounded-lg text-lg h-[46px] bg-gradient-to-br from-red-400 to-red-500 text-white hover:transition-colors duration-300 px-4 py-2 hover:to-red-600 "
                    >
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
                </NavLink>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
