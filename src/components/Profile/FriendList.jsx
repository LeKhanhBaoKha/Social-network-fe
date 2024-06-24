import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ProfileFriendList({ friends, setActiveTab }) {
  const [FriendsData, setFriendsData] = useState([]);
  const imageUrl = "http://localhost:8000/storage/posts/";

  useEffect(() => {
    setFriendsData(friends);
  }, [friends]);

  return (
    <>
      {FriendsData?.length > 0 && (
        <div className="w-[560px] lg:w-[360px] max-h-[530px] border rounded-xl bg-white">
          <div className="m-4 flex gap-[10px] flex-col">
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold text-lg p-2">Bạn bè</h1>
                <p className="text-gray-500">{FriendsData?.length} người bạn</p>
              </div>
              <div>
                <button
                  onClick={() => setActiveTab("/friends")}
                  className="w-[200px] p-2 hover:bg-gray-200 rounded-lg text-lg transition-colors"
                >
                  Xem danh sách bạn bè
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 rounded-xl">
              {FriendsData.slice(0, 9).map((friend) => (
                <NavLink
                  key={friend.id}
                  className="hover:cursor-pointer"
                  to={`/profile/${friend.id}`}
                >
                  <div className="rounded-xl flex flex-col items-center">
                    <img
                      src={
                        friend.avatar.includes("http")
                          ? friend.avatar
                          : imageUrl + friend.avatar
                      }
                      alt={friend.username}
                      className="w-[150px] h-[150px] lg:w-[100px] lg:h-[100px] rounded-xl object-cover hover:cursor-pointer"
                    />
                    <p className="mt-1 max-w-[150px] text-center overflow-hidden h-[24px]">
                      {friend.first_name + " " + friend.last_name}
                    </p>
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
