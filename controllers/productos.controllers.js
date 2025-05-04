import modelos from '../models/productos.models.js'
import handleMongoId from '../utils/handle-mongo-id.js'

const getAll = async (req, res) => {

    try {
        const productos = await modelos.obtenerTodos()
        res.json(handleMongoId(productos))
    } catch (error) {
        console.log('[getAll]', error)
    }

}

const getOne = async(req, res) => {
    const id = req.params.id

    try {
        const producto = await modelos.obtenerUnProducto(id) 
        res.json(handleMongoId(producto))
    } catch (error) {
        console.log('[getOne]', error)
    }

}

const create = async (req, res) => {
    // Obtenemos los datos del body
    const datos = req.body;
  
    try {
      // Si se subieron archivos (mediante multer en caso de usar multipart/form-data)
      if (req.files && req.files.length > 0) {
        datos.foto = req.files.map(file => file.path);
      } 
      // De lo contrario, si el front ya envió la URL de Cloudinary, la usamos
      else if (datos.foto) {
        // Aseguramos que sea un arreglo
        datos.foto = Array.isArray(datos.foto) ? datos.foto : [datos.foto];
      } else {
        // Si no se envía ningún dato, definimos un arreglo vacío o generamos un error si el campo es obligatorio
        datos.foto = [];
      }
  
      // Validación mínima (por ejemplo, el campo "nombre" es obligatorio)
      if (!datos.nombre) {
        return res.status(400).json({ error: 'El campo "nombre" es requerido.' });
      }
  
      const productoCreado = await modelos.crearProducto(datos);
      res.status(201).json(handleMongoId(productoCreado));
    } catch (error) {
      console.error('[create]', error);
      res.status(500).json({ error: 'Error al crear el producto', details: error.message });
    }
  };
  const update = async (req, res) => { 
    const id = req.params.id
    const productoPorEditado = req.body

    try {
        const produtoActualizado = await modelos.updateProducto(id, productoPorEditado)
        res.json(handleMongoId(produtoActualizado))

    } catch (error) {
        console.log('[update]', error)
    }
}

const remove = async (req, res) => {
    const id = req.params.id
    
    try {
        const productoBorrado = await modelos.deleteProducto(id)
        console.log(productoBorrado)
        res.json(handleMongoId(productoBorrado))
    } catch (error) {
        console.log('[error]', error)
    }

}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}