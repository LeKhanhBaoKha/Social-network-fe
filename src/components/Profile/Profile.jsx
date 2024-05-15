import Post from "../Post/Post";
import ProfileAlbum from "./Album";
import ProfileFriendList from "./FriendList";
import ProfileHeader from "./Header";

import { Introduction } from "./Introduction";

export default function Profile() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-indigo-100 m-0 p-0 ">
      <div className="">
        <ProfileHeader />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-[10px]">
        <div className="flex flex-col gap-[10px] items-center ">
          <Introduction />
          <ProfileAlbum />
          <div className="sticky top-0">
            <ProfileFriendList />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

      </div>
    </div>
  );
}
