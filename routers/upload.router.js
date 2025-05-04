import express from 'express'
import productosController from '../controllers/productos.controller.js'
import upload from '../middlewares/multer-cloudinary.js'

const router = express.Router()

router.post('/', upload.array('foto', 10), productosController.create)

export default router