import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'https://65472c48902874dff3ac010a.mockapi.io/api/v1'
});

export default axiosConfig;