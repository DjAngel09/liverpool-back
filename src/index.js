const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

require('dotenv').config();

//creando servidor express
const app = express();

// mongoose
//   .connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use('/api/users', require('./routes/users'));


//escuha las peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

module.exports = app;