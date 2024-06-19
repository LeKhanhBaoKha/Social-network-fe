import axiosClient from "./axiosClient";

const APIMessage = {
    sendMessage(data) {
        const url = '/api/messages';
        return axiosClient.post(url, data);
    },
}
export default APIMessage;