import { response } from 'express';
import User from '../models/user.model.js'


export const getUsers = async (req, res = response) => {

    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.log(error);
        res.send(error)
    }

}

export const getUserById = async (req, res = response) => {

    const user = await User.findById(req.params.idUser);

    if (!user) return res.status(404).json({ message: 'usuario no encontrado' });

    res.json(user)

}

export const createUser = async (req, res = response) => {

    const { name, lastname, secondLastname, email, address } = req.body;

    console.log(req.body);

    try {
        const user = new User({
            name,
            lastname,
            secondLastname,
            email,
            address
        });

        await user.save();

        res.send('usuario registrado');

    } catch (error) {
        console.log(error);
        res.send('error')
    }

}

export const updateUser = async (req, res = response) => {

    const user = await User.findByIdAndUpdate(req.params.idUser, req.body);

    if (!user) return res.status(404).json({ message: 'usuario no encontrado' });

    res.json(user);

}

export const deleteUser = async (req, res = response) => {

    const user = await User.findByIdAndDelete(req.params.idUser);

    if (!user) return res.status(404).json({ message: 'Usiario no encontrado' });

    res.json(user);

}