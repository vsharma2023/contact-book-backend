const contactController = require('../controller/contact.controller');
const express = require('express');
const router = express.Router();

router.get('/contacts', contactController.getAllContacts);

router.get('/contacts/:id', contactController.getContactsById);

module.exports = router;