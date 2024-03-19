import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/users.controller.js';

/*
    Rutas de Productos
    host + /api/users
*/

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties: 
 *              name:
 *                  type: string
 *                  description: Es el nombre del usuario. 
 *              lastname:
 *                  type: string
 *                  description: Apellido paterno. 
 *              secondLastname:
 *                  type: string
 *                  description: Apellido materno. 
 *              email:
 *                  type: string
 *                  description: correo electronico.
 *              addres: 
 *                  type: object
 *                  properties: 
 *                      cp:
 *                          type: int
 *                          example: 50453 
 *                      asentamiento:
 *                          type: string
 *                          example: Morelos 
 *                      tipo_asentamiento:
 *                          type: string
 *                          example: colonia 
 *                      municipio:
 *                          type: string
 *                          example: Atlacomulco 
 *                      estado:
 *                          type: string
 *                          example: Mexico 
 *                      ciudad:
 *                          type: string
 *                          example: Atlacomulco 
 *                      pais:
 *                          type: string
 *                          example: Mexico
 *          required:
 *              -name
 *              -lastname
 *              -secondLastname
 *              -email
 *              -address
 *          example:
 *              name: Angel
 *              lastname: Hernandez
 *              secondLastname: Martinez
 *              email: prueba@prueba.com
 *              address: {
 *                      cp: 50453,
 *                      asentamiento: 'Morelos',
 *                      tipo_asentamiento: 'Colonia',
 *                      municipio: 'Atlacomulco',
 *                      estado: 'Mexico',
 *                      ciudad: 'Atlacomulco',
 *                      pais: 'Mexico' 
 *                  }
 */


/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: Traer todos los usuarios
 *      tags: [User]
 *      responses:
 *          200:
 *              description: todos los usuarios;
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 */
router.get('/', getUsers);

/**
 * @swagger
 * /api/users/{idUser}:
 *  get:
 *      summary: Traer a un usuario especifico
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: idUser
 *            schema:
 *              type: string
 *            required: true
 *            description: el id del usuario
 *      responses:
 *          200:
 *              description: usuario por idUser
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: usuario no encontrado
 */
router.get('/:idUser', getUserById);

/**
 * @swagger
 * /api/users:
 *  post:
 *      summary: Crear nuevo usuario
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: nuevo usuario creado;
 */
router.post('/', createUser);

/**
 * @swagger
 * /api/users/{idUser}:
 *  put:
 *      summary: Actualizar a un usuario
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: idUser
 *            schema:
 *              type: string
 *            required: true
 *            description: el id del usuario
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: Usuario actualizado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: usuario no encontrado
 */
router.put('/:idUser', updateUser);

/**
 * @swagger
 * /api/users/{idUser}:
 *  delete:
 *      summary: Eliminar a un usuario
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: idUser
 *            schema:
 *              type: string
 *            required: true
 *            description: el id del usuario
 *      responses:
 *          200:
 *              description: usuario eliminado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: usuario no encontrado
 */
router.delete('/:idUser', deleteUser);

export default router;