import { Router } from 'express';
import { getAddress } from '../controllers/address.controller.js';

/*
    Rutas de Productos
    host + /api/users
*/

const routerAddress = Router();

/**
 * @swagger
 * /api/address/{cp}:
 *  get:
 *      summary: trae un listado de direcciones que contiene el cp segun copomex
 *      tags: [Address]
 *      parameters:
 *          - in: path
 *            name: cp
 *            schema:
 *              type: string
 *            required: true
 *            description: el cp para realizar la busqueda
 *      responses:
 *          200:
 *              description: listado de direcciones segun copomex
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              type: object
 *                              properties: 
 *                                  cp:
 *                                      type: int
 *                                      example: 50453 
 *                                  asentamiento:
 *                                      type: string
 *                                      example: Morelos 
 *                                  tipo_asentamiento:
 *                                      type: string
 *                                      example: colonia 
 *                                  municipio:
 *                                      type: string
 *                                      example: Atlacomulco 
 *                                  estado:
 *                                      type: string
 *                                      example: Mexico 
 *                                  ciudad:
 *                                      type: string
 *                                      example: Atlacomulco 
 *                                  pais:
 *                                      type: string
 *                                      example: Mexico
 *          500:
 *              description: internal server error
 */
routerAddress.get('/:cp', getAddress);

export default routerAddress;