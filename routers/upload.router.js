import express from 'express';
import uploadCtrl from '../controllers/upload.controllers.js';
import upload from '../middlewares/upload.cloudinary.js';

const router = express.Router();

router.post('/', upload.array('foto', 10), uploadCtrl.uploadImagen);

export default router;