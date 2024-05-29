import { useEffect, useState } from "react";
import Post from "./Post";

export default function GlobalPortList() {
  const [publicPosts, setSublicPosts] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/post/index");
        if (!response.ok) {
          throw new Error(`Error status" ${response.status}`);
        }
        const result = await response.json();
        setSublicPosts(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
  if (publicPosts != null) {
    console.log(publicPosts);
  }
  return (
    <div className="flex flex-col gap-[10px]">
      {publicPosts && publicPosts.map((post) => <Post post={post} />)}
    </div>
  );
}
