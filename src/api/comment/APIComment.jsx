import axiosClient from "../axiosClient";
import axiosClientFormData from "../axiosClientFormData";

const APIComment = {
  getParentComment(data) {
    const url = `/api/comment/getparent/${data}`;
    return axiosClient.get(url, data);
  },
  getChildComment(data) {
    console.log("data child", data);
    const url = `/api/comment/getchild/${data.id}/${data.post_id}`;
    console.log("child parent", url);
    return axiosClient.get(url, data);
  },
  createComment(data) {
    const url = "/api/comment/create";
    return axiosClientFormData.post(url, data);
  },
  edit(data) {
    const url = "/api/comment/edit";
    return axiosClientFormData.post(url, data);
  },
  delete(data) {
    const url = "/api/comment/delete";
    console.log("delete data", data);
    return axiosClient.delete(url, { data });
  },
};
export default APIComment;
