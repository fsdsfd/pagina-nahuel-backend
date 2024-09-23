import mongoose from "mongoose";

const CarritosEsquema = mongoose.Schema(
    {
        carrito: Array
    },
    {
        timestamps: true, // createAt | updatedAt 
        versionKey: false
    }
)

export default CarritosEsquema