import { useEffect, useState } from "react";
import axios from "axios";

export default function GetPublicPost() {
  const [publicPosts, setPublicPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/post/index");
      setPublicPosts(response.data.data);
    } catch (error) {
      console.error("Error:", error);
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { publicPosts, error, loading };
}
