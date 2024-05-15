import Post from "../Post/Post";
import ProfileAlbum from "./Album";
import ProfileFriendList from "./FriendList";
import ProfileHeader from "./Header";

export default function Profile() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-indigo-100">
      <div className="mb-[10px]">
        <ProfileHeader />
      </div>
      <div className="ml-[5px] w-full flex justify-center gap-[10px]">
        <div>
          <ProfileAlbum />
          <ProfileFriendList />
        </div>
        <Post />
      </div>
    </div>
  );
}
