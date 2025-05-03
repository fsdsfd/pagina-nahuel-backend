const uploadImagen = (req, res) => {
  const files = req.files;

  if (!files || files.length === 0) {
      return res.status(400).send('No se recibieron imágenes');
  }

  console.log(req.protocol);
  console.log(req.get('host')); // Obtengo url

  const urls = req.files.map(file => `${req.protocol}://${req.get('host')}/uploads/${file.filename}`)

  res.status(201).json({ archivos: urls });
};

export default {
  uploadImagen
};