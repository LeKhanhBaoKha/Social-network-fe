export default function DeletePost(post_id) {
  console.log("post_id in delete func", post_id);
  const dataToSend = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id: post_id }),
  };
  console.log("delete data", dataToSend);
  fetch("http://localhost:8000/api/post/delete", dataToSend)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
