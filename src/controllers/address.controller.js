import { response } from 'express';
import { getApiCopomex } from '../helpers/getApi.js';


export const getAddress = async (req, res = response) => {

    try {
        const address = await getApiCopomex(req.params.cp);
        res.json(address);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'internanl server error'});
    }

}
