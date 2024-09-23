import express from 'express'
const routerCarrito = express.Router()

import controladoresCarrito from '../controllers/carritos.controllers.js'

routerCarrito.post('/', controladoresCarrito.guardarCarrito)

export default routerCarrito