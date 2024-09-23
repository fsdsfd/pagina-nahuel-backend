import CarritosEsquema from "./esquemas/CarritosEsquema.js"
import mongoose from "mongoose"

// ! MODELO MONGOOSE 
const CarritosModelo = mongoose.model('carritos', CarritosEsquema)

const crearCarrito = async (carrito) => {

    try {

        const carritoCreado = new CarritosModelo({ carrito }) // Tiene que ser un objeto
        const carritoGuardado = await carritoCreado.save() // Escribo el carrito recibido en la base

        return carritoGuardado
        
    } catch (error) {
        console.log('[crearCarrito]: No se pudo crear...', error)
    }
}

export default {
    crearCarrito
}