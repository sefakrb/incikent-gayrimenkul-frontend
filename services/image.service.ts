import axiosInstance from "~/axios.config";

const image = axiosInstance

export default {
    async createImage(imageData: FormData) {
        return (await image.post("image", imageData)).data.data;
    },
}

