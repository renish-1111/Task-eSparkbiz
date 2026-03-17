const languageService = require("../services/language.service")
const technologyService = require("../services/technology.service")
const relationshipStatusService = require("../services/relationshipstatus.service")
const departmentService = require("../services/department.service")
const formService = require("../services/form.service")
const connection = require("../db/db.config")

class FormController {
    async showForm(req, res, next) {
        try {
            const languages = await languageService.showAllLanguage()
            const technologies = await technologyService.showAllTechnology()
            const relationshipstatus = await relationshipStatusService.showAllRelationshipStatus()
            const deparments = await departmentService.showAllDepartent()

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
            console.log(formData);

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
            const address = {
                address1: formData.address1,
                address2: formData.address1,
                state: formData.state,
                city: formData.city,
                zipcode: formData.zipcode,
            }

            // const educations = { degree_name:req.body.course_name, university:req.body.course_degree, passing_year:req.body.course_pass, percentage:req.body.course_percentage };
            const degree_name = req.body.course_name;
            const university = req.body.university;
            const passing_year = req.body.course_pass;
            const percentage = req.body.course_percentage;

            let educations = [];
            for (let i = 0; i < degree_name.length; i++) {
                educations.push(
                    {
                        degree_name:degree_name[i], 
                        university: university[i],
                        passing_year: passing_year[i],
                        percentage: percentage[i]
                    }
                )
            }

            console.log(educations);

            const [basicdetailId, addressId, educationIds] = await formService.submitForm(basicdetail, address, educations)
            console.log([basicdetailId, addressId, educationIds]);

            res.send("Form submitted successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send("An error occurred while submitting the form");
        }
    }


}

module.exports = new FormController();