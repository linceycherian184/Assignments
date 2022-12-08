const path = require('path');
const express = require('express');
const contactController = require('../controllers/contact')

const router = express.Router();

router.get('/contactus',contactController.contactUs );

router.post('/contactus', contactController.contact)

module.exports = router;
