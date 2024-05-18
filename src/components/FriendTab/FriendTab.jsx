import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function FriendTab() {
  const [FriendsData, setFriendsData] = useState();
  useEffect(() => {
    // fetch("https://dummyjson.com/users")
    //   .then((res) => setFriendsData(res.json()))
    //   .then(console.log);
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error(`Error status" ${response.status}`);
        }
        const result = await response.json();
        setFriendsData(result.users);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
  if (FriendsData != null) {
    console.log(FriendsData);
  }
  return (
    <div className="w-[900px] flex flex-col border rounded-xl p-2">
      <div className="flex w-[600px] gap-[100px]">
        <h1 className="text-lg font-semibold py-2">Bạn bè</h1>
        <div className="flex justify-center items-center">
          <form className="w-[300px] mx-auto">
            <div className="flex">
              <div className="translate-x-6  start-0 flex items-center ps-3 pointer-events-none">
                <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
              </div>
              <input
                className="w-[300px] h-[30px] outline-none bg-slate-100 rounded-[20px] pl-[28px] pr-[28px]"
                placeholder="Tìm kiếm..."
              />
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-2 m-auto gap-[20px] my-[10px]">
        {FriendsData &&
          FriendsData.map((friend) => (
            <NavLink className="hover:cursor-pointer">
              <div className="w-[400px] flex flex-row justify-between border p-4 rounded-xl">
                <div className="flex flex-row items-center gap-[10px]">
                  <img
                    className="w-[150px] h-[150px] lg:w-[100px] lg:h-[100px] rounded-xl object-cover hover:cursor-pointer "
                    key={friend.id}
                    src={friend.image}
                    alt={friend.username}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-semibold">{friend.username}</h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="h-[40px] p-2 rounded-lg text-lg text-white bg-red-500 mr-[10px] hover:bg-red-600 transition-colors">
                    Hủy kết bạn
                  </button>
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
}
