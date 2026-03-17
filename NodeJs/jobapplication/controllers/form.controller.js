const languageService = require("../services/language.service")
const technologyService = require("../services/technology.service")
const relationshipStatusService = require("../services/relationshipstatus.service")
const departmentService = require("../services/department.service")
const basicdetailService = require("../services/basicdetail.service")
const connection = require("../db/db.config")

class FormController {
    async showForm(req, res, next) {
        try {
            const languages = await languageService.showAllLanguage()
            const technologies = await technologyService.showAllTechnology()
            const relationshipstatus = await relationshipStatusService.showAllRelationshipStatus()
            const deparments = await departmentService.showAllDepartent()

            console.log(deparments);


            res.render("index", {
                layout: 'base',
                title: 'Home Page',
                languages: languages,
                technologies: technologies,
                relationshipstatus: relationshipstatus,
                deparments: deparments,
            });
        } catch (error) {
            console.log(error);
        }
    }

    async submitForm(req, res, next) {
        const conn = await connection.getConnection();
        try {
            const formData = req.body;
            const basicdetail = {
                fname: formData.fname,
                lname: formData.lname,
                email: formData.email,
                phone: formData.phone,
                gender: formData.gender,
                relationshipstatus: formData.relationshipstatus,
                designation: formData.designation,
                bod: new Date(formData.bod),
            }

            await conn.beginTransaction();


            const basicdetailId = await basicdetailService.createBasicDetail(basicdetail);
            console.log(basicdetailId);
            await conn.commit();
            res.send("Form submitted successfully");
        } catch (error) {
            console.log(error);
            await conn.rollback();
            res.status(500).send("An error occurred while submitting the form");
        }
    }


}

module.exports = new FormController();