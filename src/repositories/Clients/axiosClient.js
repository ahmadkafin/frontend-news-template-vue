import axios from "axios";

const baseDomain = "http://127.0.0.1:8000";
const baseUrl = `${baseDomain}/api`;

export default axios.create({
    baseURL: baseUrl,
    headers: {
    },
})