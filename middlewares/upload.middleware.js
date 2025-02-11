import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';
import path from 'node:path'

// Obj de configuración de multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const rutaDeAlmacenamiento = path.join('public', 'uploads') // /public/uploads
        cb(null, rutaDeAlmacenamiento)
    },
    filename: function(req, file, cb) {
        const extension = file.originalname.split('.').pop() // foto.jpg => ['foto', 'jpg'].pop() => 'jpg'
        // https://www.npmjs.com/package/uuid || npm i uuid
        const nombreArchivo = `${uuidv4()}.${extension}` // 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d.jpg
        cb(null, nombreArchivo)
    }
})

// Creo el middleware a partir del obj config
const uploadMiddleware = multer(  { storage }  )

export default uploadMiddleware