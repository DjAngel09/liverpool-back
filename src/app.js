import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/users.routes.js';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';
import { fileURLToPath } from 'url';
import routerAddress from './routes/address.routes.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swaggerSpect = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CRUD prueba Liverpool',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:3001'
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
}


const app = express();

app.use(morgan('dev'));

// CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use('/api/users', router);
app.use('/api/address', routerAddress);
app.use('/api-doc', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerJsdoc(swaggerSpect)));

export default app;