import express from 'express'
const routerUpload = express.Router()
import controladores from '../controllers/upload.controllers.js'
import uploadMiddleware from '../middlewares/upload.middleware.js'

/* POST - request para guardar una imagen */
routerUpload.post('/', uploadMiddleware.array('foto', 7), controladores.uploadImagen)

export default routerUpload