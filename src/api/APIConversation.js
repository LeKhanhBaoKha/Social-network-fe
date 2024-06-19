import axiosClient from "./axiosClient";

const APIConversation = {
    getAllConversationByUser(data) {
        const url = '/api/conversations/getAllConversationByUser';
        return axiosClient.get(url, data);
    },
    getAllMesssageByConversation(params) {
        const url = '/api/conversations/getAllMesssageByConversation';
        return axiosClient.get(url, {params});
    },

}
export default APIConversation;