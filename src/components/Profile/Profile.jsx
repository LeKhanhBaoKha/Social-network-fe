import Post from "../Post/Post";
import ProfileAlbum from "./Album";
import CreatePost from "./CreatePost";
import ProfileFriendList from "./FriendList";
import ProfileHeader from "./Header";

import { Introduction } from "./Introduction";

export default function Profile() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-indigo-100 m-0 p-0 gap-[10px] ">
      <div className="">
        <ProfileHeader />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-[10px]">
        <div className="flex flex-col gap-[10px] items-center ">
          <Introduction />
          <ProfileAlbum />
          <div className="sticky top-0">
            <ProfileFriendList />

            <div className="hidden lg:block mt-[10px] w-[360px] h-[140px] overflow-hidden rounded-xl">
              <img
                className="translate-y-[-10%]"
                src="https://www.turing.com/blog/wp-content/uploads/2022/07/7-Emojis-Used-by-Software-Developers-640x853.jpg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <CreatePost />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

      </div>
    </div>
  );
}
