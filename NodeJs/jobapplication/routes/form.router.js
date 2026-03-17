const express = require('express')
const router = express.Router()
const formController = require("../controllers/form.controller")
// import all controllers
// import SessionController from './app/controllers/SessionController';


// Add routes
router.get('/', formController.showForm);
router.get('/view', formController.showEntry);
router.post('/form', formController.submitForm);


module.exports = router;
