const express = require('express')
const router = express.Router()
const formController = require("../controllers/form.controller")
// import all controllers
// import SessionController from './app/controllers/SessionController';


// Add routes
router.get('/', formController.showForm);
router.post('/form', (req,res) => {
    console.log(req.body);
    res.send("ok")
})


module.exports = router;
