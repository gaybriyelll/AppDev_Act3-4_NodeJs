const express = require('express');
const router = express.Router();
const hp = require('../controller/HpController');


router.get('/', hp.gyb);              
router.get('/about', hp.about);  
router.get('/contact', hp.contact); 
router.get('/services', hp.services); 
router.get('/inspiration', hp.inspiration);



module.exports = router;
