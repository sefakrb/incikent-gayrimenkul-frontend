import axiosInstance from "~/axios.config";

const advertisement = axiosInstance

interface AdvertisementData {
    title: String;
    price: Number;
    region: String;
    meter: Number;
    room: String;
    link: String;
    imageId: Number;
}

export default {
    async getAdvertisement(){
        console.log("getAdvertisement");
        return (await advertisement.get("advertisement/")).data
    },

    createAdvertisement(advertisementData: AdvertisementData) {
        console.log("service: ", advertisementData);
        return advertisement.post("advertisement", advertisementData);
    },
}

