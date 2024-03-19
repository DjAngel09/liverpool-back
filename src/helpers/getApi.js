import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();


const url = process.env.API_COPOMEX || "https://api.copomex.com/query/info_cp/";
const token = process.env.COPOMEX_TOKEN

export const getApiCopomex= async (cp) => {

    const resp = await axios.get(`${url}${cp}?token=${token}`);
    return resp.data;

}