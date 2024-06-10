import { useEffect, useState } from "react";
import Post from "./Post";
import GetPublicPost from "../../api/post/GetPublicPost";

export default function GlobalPortList() {
  const { publicPosts, error, loading } = GetPublicPost();
  const [postOnlyThatUserCanSee, setPostOnlyThatUserCanSee] = useState();

  return (
    <div className="flex flex-col gap-[10px]">
      {publicPosts && publicPosts.map((post) => <Post post={post} />)}
    </div>
  );
}
