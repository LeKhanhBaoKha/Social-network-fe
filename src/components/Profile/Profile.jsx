import ProfileAlbum from "./Album";
import CreatePost from "../CreatePost/CreatePost";
import ProfileFriendList from "./FriendList";
import ProfileHeader from "./Header";
import { Introduction } from "./Introduction";
import { useNavigate, useParams } from "react-router-dom";
import APIProfile from "../../api/APIProfile";
import { useEffect, useState } from "react";
import UserPost from "./UserPost";
import FriendTab from "../FriendTab/FriendTab";
import AlbumTab from "../AlbumTab/AlbumTab";
import VideoTab from "../VideoTab/VideoTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faUserFriends,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  const { user_id } = useParams();
  const imageUrl = "http://localhost:8000/storage/posts/";
  const [user, setUser] = useState(null);
  const [publicPosts, setPublicPosts] = useState([]);
  console.log("public posts", publicPosts);
  const [activeTab, setActiveTab] = useState("/Post");

  useEffect(() => {
    setActiveTab("/Post");
    const fetchProfile = async () => {
      try {
        console.log("user_id", user_id);
        const response = await APIProfile.getUser(user_id);

        setUser(response.data.data);
        // console.log("user ìnfo", response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchProfile();

    const fetchPosts = async () => {
      try {
        const response = await APIProfile.userPost(user_id);
        setPublicPosts(response.data.data);
        console.log(response.data.dat);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchPosts();
  }, [user_id]);

  const fetchPosts = async () => {
    try {
      const response = await APIProfile.userPost(user_id);
      setPublicPosts(response.data.data);
      console.log(response.data.dat);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {user != null && user && publicPosts && (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-indigo-100 m-0 p-0 gap-[10px] ">
          <div className="">
            <ProfileHeader
              fetchPosts={fetchPosts}
              user={user}
              setUser={setUser}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          {activeTab === "/Post" && (
            <div className="w-full flex flex-col lg:flex-row justify-center gap-[10px]">
              <div className="flex flex-col gap-[10px] items-center ">
                <Introduction />
                <ProfileAlbum posts={publicPosts} setActiveTab={setActiveTab} />
                <div className="sticky top-0">
                  <ProfileFriendList
                    friends={user?.userWhoIsYourFriend || []}
                    setActiveTab={setActiveTab}
                  />

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
                <CreatePost
                  user={user}
                  setPost={setPublicPosts}
                  posts={publicPosts}
                />
                {publicPosts?.length > 0 && (
                  <UserPost user_id={user?.id} posts={publicPosts}></UserPost>
                )}
              </div>
            </div>
          )}

          {activeTab === "/friends" && (
            <>
              <FriendTab
                setActiveTab={setActiveTab}
                friends={user?.userWhoIsYourFriend}
              ></FriendTab>
            </>
          )}

          {activeTab === "/Image" && (
            <>
              <AlbumTab posts={publicPosts}></AlbumTab>
            </>
          )}

          {activeTab === "/Video" && (
            <>
              <VideoTab posts={publicPosts}></VideoTab>
            </>
          )}
        </div>
      )}
    </>
  );
}
