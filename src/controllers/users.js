const { response } = require('express');

const getUsers = async (req, res = response) => {

    res.send('hola mundo')

    // Todo.find((err, todos) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(todos);
    // });

}

module.exports = {
    getUsers,
}