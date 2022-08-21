import axios from "axios";


export function postInformationinAPI(data){
    const url = "https://625a91bf0ab4013f94a2d9a8.mockapi.io/orders";
    return axios.post(url,data);
}