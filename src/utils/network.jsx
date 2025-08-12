import axios from "axios";

const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
    function (response) {
        return response.data.data
    }
)

export {axiosInstance};
