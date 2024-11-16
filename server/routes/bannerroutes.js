const express = require('express');
const {getbannerdata, updatebannerdata } = require('../controllers/banner');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/get-banner',getbannerdata);
// router.post('/add-banner',bannerdata);
router.put('/update-banner/:bannerId',auth,updatebannerdata);

module.exports = router;