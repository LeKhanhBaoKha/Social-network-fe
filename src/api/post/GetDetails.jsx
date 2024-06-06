import { useEffect, useState } from "react";

export default function GetDetails(postId) {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/post/smailDetails/${postId}`
      );
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      const result = await response.json();
      setDetails(result.data);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
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
