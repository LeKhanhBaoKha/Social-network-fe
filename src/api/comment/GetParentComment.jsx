import { useState, useEffect } from "react";

const UseFetchParentComment = (postId) => {
  const [parentComment, setParentComment] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/comment/getparent/${postId}`
      );
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      const result = await response.json();
      setParentComment(result.data);
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

  return { parentComment, error, loading };
};

export default UseFetchParentComment;
