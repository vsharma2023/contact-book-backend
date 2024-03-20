const contactController = require('../controller/contact.controller');
const express = require('express');
const router = express.Router();

router.get('/contacts', contactController.getAllContacts);

router.get('/contacts/:id', contactController.getContactsById);

router.post('/contacts', contactController.addConatct);

router.put('/contacts/:id', contactController.updateContact);

router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;