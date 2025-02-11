
const uploadImagen = (req, res) => {
    const file = req.file

    if( !file ) {
        return res.status(400).send('No se recibió ninguna imagen')
    }

    console.log(req.protocol)
    console.log(req.get('host')) // Obtengo url

    const urlCompleta = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
    
    res.status(201).json({foto: urlCompleta})    
}

export default {
    uploadImagen
}