import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodexplorer-api0089.onrender.com"
});