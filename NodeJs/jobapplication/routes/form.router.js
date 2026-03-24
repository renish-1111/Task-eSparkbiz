const express = require('express')
const router = express.Router()
const formController = require("../controllers/form.controller")
// import all controllers
// import SessionController from './app/controllers/SessionController';


// Add routes
router.get('/', formController.showForm);
router.get('/view', formController.showEntry);
router.get('/view/:id', formController.viewForm);
router.get('/delete/:id', formController.deleteForm);
router.get('/edit/:id', formController.editViewForm);
router.post('/edit/:id', formController.editForm);
router.post('/form', formController.submitForm);


module.exports = router;
