import axiosInstance from "~/axios.config";

const image = axiosInstance

export default {
    async createImage(imageData: FormData) {
        console.log(imageData, typeof imageData);
        // console.log("service: ", imageData.get("image"));
        return (await image.post("image", imageData)).data.data;
    },
}

