import axiosClient from "../axiosClient";
import axiosClientFormData from "../axiosClientFormData";
const APIPost = {
  index() {
    const url = "/api/post/index";
    return axiosClient.get(url);
  },
  get(data) {
    const url = `/api/post/get/${data}`;
    return axiosClient.get(url);
  },
  create(data) {
    const url = "/api/post/create";
    return axiosClientFormData.post(url, data);
  },
  share(data) {
    const url = "/api/post/sharePost";
    return axiosClientFormData.post(url, { post_id: data });
  },
  update(data) {
    const url = "/api/post/update";
    return axiosClientFormData.post(url, data);
  },
  delete(data) {
    const url = "/api/post/delete";
    return axiosClient.delete(url, { data });
  },
  deleteShare(data) {
    const url = "/api/user/deleteShare";
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
  like(data) {
    const url = "/api/post/likePost";
    console.log("likePost data", data);
    return axiosClientFormData.post(url, data);
  },
};
export default APIPost;
