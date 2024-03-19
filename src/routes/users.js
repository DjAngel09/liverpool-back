import { Router } from 'express';
import { createUser, getUsers } from '../controllers/users.js';

/*
    Rutas de Productos
    host + /api/users
*/

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);

export default router;