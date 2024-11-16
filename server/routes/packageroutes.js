const express = require('express');
const { addPackage, getPackage, updatePackage, deletePackage } = require('../controllers/packages');
const upload = require('../middleware/uploads');
const auth = require('../middleware/auth');
const router=express.Router();

router.post('/add-package',auth,upload.single('image'),addPackage);
router.put('/update-package/:id',auth,upload.single('image'),updatePackage);
router.get('/get-package',getPackage);
router.delete('/delete-package/:id',auth,deletePackage);
module.exports = router;