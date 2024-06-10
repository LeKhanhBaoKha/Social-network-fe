import { useEffect, useState } from "react";
import axios from "axios";

export default function GetDetails(postId) {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/post/smailDetails/${postId}`
      );
      setDetails(response.data.data);
    } catch (error) {
      console.error("Error:", error);
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchData();
    }
  }, [postId]);

  return { details, error, loading };
}
