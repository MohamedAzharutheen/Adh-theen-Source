const express = require('express');
const upload = require('../middleware/uploads');
const { addGallery, getGallery, deleteGallery, updateGallery } = require('../controllers/gallery');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/add-gallery',auth,upload.array('images',15),addGallery);
router.get('/get-gallery',getGallery);
router.delete('/delete-gallery/:id',auth,deleteGallery);
router.put('/update-gallery/:id',auth,upload.array('images',15),updateGallery);
module.exports = router;