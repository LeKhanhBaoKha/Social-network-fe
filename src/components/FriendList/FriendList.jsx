import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function FriendList() {
  const [FriendsData, setFriendsData] = useState();
  const [potentialFriend, setPotential] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error(`Error status" ${response.status}`);
        }
        const result = await response.json();
        setFriendsData(
          result.users.sort(() => Math.random() - 0.5).slice(0, 10)
        );
      } catch (error) {
        console.error("Error:", error);
      }
    };
    const potentialFriend = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error(`Error status" ${response.status}`);
        }
        const result = await response.json();
        setPotential(result.users.sort(() => Math.random() - 0.5).slice(0, 10));
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
    potentialFriend();
  }, []);

  return (
    <div className="w-[250px] h-[700px] flex flex-col p-2 overflow-auto">
      {/* friendlist */}
      <div className="border-b pb-2 border-gray-300">
        <h1 className="text-xl font-semibold">Cuộc trò chuyện</h1>
        {FriendsData &&
          FriendsData.map((friend) => (
            <div className="flex items-center  hover:bg-purple-50 transition-colors rounded-xl p-2">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={friend.image}
                alt=""
              />
              <h1 className="font-medium">{friend.username}</h1>
            </div>
          ))}
        {/* if the user has no friends */}
        {FriendsData == null &&
          potentialFriend &&
          potentialFriend.map((friend) => (
            <div className="flex gap-[10px] flex-col  hover:bg-purple-50 transition-colors rounded-xl p-2">
              <div className="flex items-center">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src={friend.image}
                  alt=""
                />
                <h1 className="font-medium">{friend.username}</h1>
              </div>

              <button className="p-2 rounded-lg text-lg text-white bg-purple-500 mr-[10px] hover:bg-purple-400 transition-colors">
                <FontAwesomeIcon className="mr-2" icon={faPlus} />
                Kết bạn
              </button>
            </div>
          ))}
      </div>
      {/* groupchat */}
      <div className="mt-[10px]">
        <div className="border-b pb-2 border-gray-300">
          <h1 className="text-xl font-semibold">Cuộc trò chuyện nhóm</h1>
          {FriendsData &&
            FriendsData.map((friend) => (
              <div className="flex items-center  hover:bg-purple-50 transition-colors rounded-xl p-2">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src={friend.image}
                  alt=""
                />
                <h1 className="font-medium">{friend.username}</h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
