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
    const producto = req.body

    console.log('[create] req.body.foto antes:', producto.foto)

    try {
        // Intentamos asegurar que foto sea array de strings
        if (typeof producto.foto === 'string') {
            try {
                const parsedFoto = JSON.parse(producto.foto)
                if (Array.isArray(parsedFoto) && parsedFoto.every(f => typeof f === 'string')) {
                    producto.foto = parsedFoto
                } else {
                    return res.status(400).json({ error: '"foto" debe ser un array de strings válidos' })
                }
            } catch (e) {
                return res.status(400).json({ error: '"foto" no tiene formato JSON válido' })
            }
        }
        console.log('[create] req.body.foto antes:', producto.foto)
        const productoCreado = await modelos.crearProducto(producto)
        res.status(201).json(handleMongoId(productoCreado))
    } catch (error) {
        console.log('[create]', error)
        res.status(500).json({ error: 'Error al crear el producto', detalle: error.message })
    }
}
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