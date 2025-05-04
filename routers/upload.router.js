import express from 'express'
import controladores from '../controllers/productos.controllers.js'
import upload from '../middlewares/upload.cloudinary.js';

const router = express.Router()

router.post('/', upload.array('foto', 10), controladores.create);

export default router