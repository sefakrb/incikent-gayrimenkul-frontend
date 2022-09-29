import { AxiosOptions } from "@nuxtjs/axios";
import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: process.env.BACKEND_URL,
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});