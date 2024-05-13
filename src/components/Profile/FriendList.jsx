import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ProfileFriendList() {
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
    <div className="w-[360px] min-h-[350px] border rounded-xl bg-white">
      <div className="m-4 flex gap-[10px] flex-col">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-lg p-2">Bạn bè</h1>
            <p className="text-gray-500">{FriendsData?.length} người bạn</p>
          </div>
          <NavLink>
            <button className="w-[200px] p-2 hover:bg-gray-200 rounded-lg text-lg transition-colors">
              Xem danh sách bạn bè
            </button>
          </NavLink>
        </div>
        <div className="grid grid-cols-3 gap-4 rounded-xl">
          {FriendsData &&
            FriendsData.slice(0, 9).map((friend) => (
              <div className="rounded-xl">
                <img
                  key={friend.id}
                  src={friend.image}
                  alt={friend.username}
                  className="w-[100px] h-[100px] object-cover hover:"
                />
                <p className="mt-1">{friend.username}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
