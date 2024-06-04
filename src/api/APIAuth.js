import axiosClient from "./axiosClient";

const APIAuth = {
    login(data) {
        const url = '/api/auth/login';
        return axiosClient.post(url, data);
    },
    register(data)
    {
        const url = '/api/auth/register';
        return axiosClient.post(url, data);
    },
    changePassword(data) {
        const url = '/api/auth/change-password';
        return axiosClient.post(url, data);
    },
    resetPassword(data, params)
    {
        const url = '/api/auth/reset-password';
        return axiosClient.post(url, data, {params});
    },
    forgotPassword(data)
    {
        const url = '/api/auth/forgot-password';
        return axiosClient.post(url, data);
    },
}
export default APIAuth;