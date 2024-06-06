import { useEffect, useState } from "react";

export default function GetPublicPost() {
  const [publicPosts, setPublicPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/post/index`);
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      const result = await response.json();
      setPublicPosts(result.data);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { publicPosts, error, loading };
}
