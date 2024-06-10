import axios from "axios";

export default function CreatePostApi(postData, token) {
  axios
    .post("http://localhost:8000/api/post/create", postData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("Post created successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });
}
