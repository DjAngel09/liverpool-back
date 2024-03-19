import { response } from 'express';
import User from '../models/user.model.js'


export const getUsers = async (req, res = response) => {

    User.find((err, todos) => {
        if (err) {
            res.send(err);
        }
        res.json(todos);
    });

}

export const createUser = async (req, res = response) => {

    const { name, lastname, secondLastname, email } = req.body;
    
    console.log(req.body);

    try {
        const user = new User({
            name,
            lastname,
            secondLastname,
            email
        });

        await user.save();

        res.send('usuario registrado');

    } catch (error) {
        console.log(error);
        res.send('error')
    }

}