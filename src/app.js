import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/users.js';


const app = express();

app.use(morgan('dev'));

// CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use('/api/users', router);

export default app;