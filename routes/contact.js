const express = require('express');

const contactController = require('../controllers/contacts');

const router = express.Router();

router.get("/contact" , contactController.contactPage);

router.post("/success" , contactController.succesPage);

module.exports = router;