const express = require('express')
const router = express.Router()

const studentController = require("../controllers/student.controller")
const studentService = require('../services/student.service')

try {
    router.get('/', studentController.searchStudent)
} catch (error) {
    console.log(error);

}

module.exports = router;