import { useEffect, useState } from "react";
import Post from "./Post";
import APIPost from "../../api/post/APIPost";
import Cookies from "js-cookie";
export default function GlobalPortList() {
  const [publicPosts, setPublicPosts] = useState([]);
  const [cookies, setCookies] = useState({});
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await APIPost.index();
        // Access the data from the response
        // console.log("Data:", response.data.data);
        setPublicPosts(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchPosts();
  }, []);

  const [postOnlyThatUserCanSee, setPostOnlyThatUserCanSee] = useState();
  console.log("publicPosts", publicPosts);

  return (
    <div className="flex flex-col gap-[10px]">
      {publicPosts &&
        publicPosts != null &&
        publicPosts.map((post) => <Post key={post.id} postData={post} />)}
    </div>
  );
}
