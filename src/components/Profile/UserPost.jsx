import { useEffect, useState } from "react";
import Post from "../Post/Post";
export default function UserPost({ user_id, posts }) {
  const [postsData, setPostData] = useState(posts);
  useEffect(() => {
    setPostData(posts);
  }, [posts]);

  return (
    <div className="flex flex-col gap-[10px]">
      {postsData == posts &&
        postsData?.map((post) => (
          <>
            {postsData?.user_id != user_id ? (
              <Post
                sharePost={true}
                userPost={true}
                user_id={user_id}
                key={post.id}
                postData={post}
              />
            ) : (
              <>
                <Post userPost={true} key={post.id} postData={post} />
              </>
            )}
          </>
        ))}
    </div>
  );
}
