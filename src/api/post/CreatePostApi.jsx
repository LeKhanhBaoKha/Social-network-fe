export default function CreatePostApi(postData) {
  const dataToSend = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  };
  fetch("http://localhost:8000/api/post/create", dataToSend)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
