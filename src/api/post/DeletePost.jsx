import axios from "axios";

export default function DeletePost(post_id) {
  console.log("post_id in delete func", post_id);

  axios
    .delete("http://localhost:8000/api/post/delete", {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      data: { id: post_id },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
