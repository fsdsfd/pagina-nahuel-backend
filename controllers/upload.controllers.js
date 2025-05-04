const uploadImagen = (req, res) => {
  const files = req.files;
  if (!files || files.length === 0) {
    return res.status(400).send('No se recibieron imágenes');
  }

  // En Cloudinary, gracias a CloudinaryStorage de Multer, cada objeto file debe contener la propiedad `path`
  const urls = req.files.map(file => file.path);

  res.status(201).json({ archivos: urls });
};

export default {
  uploadImagen
};