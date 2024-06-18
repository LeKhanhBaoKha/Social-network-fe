import axiosClient from "../axiosClient";
import axiosClientFormData from "../axiosClientFormData";
const APIPost = {
  index() {
    const url = "/api/post/index";
    return axiosClient.get(url);
  },
  get(data) {
    const url = `/api/post/get/${data}`;
    console.log("get data", url);
    return axiosClient.get(url);
  },
  create(data) {
    const url = "/api/post/create";
    console.log("create data", data);
    return axiosClientFormData.post(url, data);
  },
  update(data) {
    const url = "/api/post/update";
    console.log("update data", data);
    return axiosClientFormData.post(url, data);
  },
  delete(data) {
    const url = "/api/post/delete";
    return axiosClient.delete(url, { data });
  },
  publicPost(data) {
    const url = "/api/post/public_post";
    return axiosClient.get(url, data);
  },
  hidePost(data) {
    const url = "/api/post/hideThePost";
    return axiosClient.post(url, data);
  },
  createComment(data) {
    const url = "/api/comment/create";
    return axiosClient.post(url, data);
  },
};
export default APIPost;
