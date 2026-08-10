const express = require('express');
const router = express.Router();

// Import Controller
const komikController = require('../controller/komikController');
const genreController = require('../controller/genreController');
const penulisController = require('../controller/penulisController');

// Routes Komik
router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);
router.post('/komik', komikController.createKomik);
router.put('/komik/:id', komikController.updateKomik);
router.delete('/komik/:id', komikController.deleteKomik);

// Routes Genre (Pastikan fungsi-fungsi ini ada di genreController)
if (genreController) {
  if (genreController.getAllGenre) router.get('/genre', genreController.getAllGenre);
  if (genreController.createGenre) router.post('/genre', genreController.createGenre);
  if (genreController.updateGenre) router.put('/genre/:id', genreController.updateGenre);
  if (genreController.deleteGenre) router.delete('/genre/:id', genreController.deleteGenre);
}

// Routes Penulis (Pastikan fungsi-fungsi ini ada di penulisController)
if (penulisController) {
  if (penulisController.getAllPenulis) router.get('/penulis', penulisController.getAllPenulis);
  if (penulisController.createPenulis) router.post('/penulis', penulisController.createPenulis);
}

module.exports = router;