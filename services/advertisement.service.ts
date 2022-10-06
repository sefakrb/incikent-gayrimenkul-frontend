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
    async getAdvertisements(){
        return (await advertisement.get("advertisement/")).data.data
    },

    createAdvertisement(advertisementData: AdvertisementData) {
        return advertisement.post("advertisement", advertisementData);
    },
}

