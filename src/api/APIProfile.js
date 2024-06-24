import axiosClient from "./axiosClient";
import axiosClientFormData from "./axiosClientFormData";

const APIProfile = {
  getUser(data) {
    const url = `/api/user/getUser/${data}`;
    return axiosClient.get(url);
  },
  unfriend(data) {
    const url = `/api/user/unfriend`;
    return axiosClient.delete(url, { data });
  },
  userPost(data) {
    const url = `/api/user/userpost/${data}`;
    return axiosClient.get(url);
  },
  edit(data) {
    const url = `/api/user/updateProfile`;
    console.log("url", url);
    return axiosClientFormData.post(url, data);
  },
};
export default APIProfile;
