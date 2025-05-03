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

    // Validar y transformar "foto" si es necesario
    if (typeof producto.foto === 'string') {
        try {
            producto.foto = JSON.parse(producto.foto) // convierte de string a array
        } catch (e) {
            console.log('Error al parsear "foto" como JSON', e)
            return res.status(400).json({ error: '"foto" debe ser un array o un JSON válido' })
        }
    }

    try {
        const productoCreado = await modelos.crearProducto(producto)
        res.status(201).json(handleMongoId(productoCreado))
    } catch (error) {
        console.log('[create]', error)
        res.status(500).json({ error: 'Error al crear el producto' })
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