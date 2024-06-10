import { useState, useEffect } from "react";

const useFetchChildComment = (commentId, postId) => {
  const [childComment, setChildComment] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/comment/getchild/${commentId}/${postId}`
      );
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      const result = await response.json();
      setChildComment(result.data);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (commentId && postId) {
      fetchData();
    }
  }, [commentId, postId]);

  return { childComment, error, loading };
};

export default useFetchChildComment;
