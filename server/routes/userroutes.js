const express = require('express');
const { register, login, changePassword, logout, checkSession } = require('../controllers/UserAuth');
const auth = require('../middleware/auth');
const { DataLength } = require('../controllers/datalength');
const { Enquiry } = require('../controllers/enquiry');
const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.post('/changepassword',auth,changePassword);
router.post('/logout',logout);
router.get('/check-session',checkSession);
router.get('/data-length',auth,DataLength);
router.post('/enquiry',Enquiry)
// router.get('/protected-route', verifyToken, (req, res) => {
//   res.json({ message: 'Protected route accessed successfully.', user: req.user });
// });


module.exports = router;