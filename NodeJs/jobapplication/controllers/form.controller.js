const languageService = require("../services/language.service")
const technologyService = require("../services/technology.service")
const relationshipStatusService = require("../services/relationshipstatus.service")
const departmentService = require("../services/department.service")

class FormController {
    async showForm(req, res, next) {
        try {
            const languages = await languageService.showAllLanguage()
            const technologies = await technologyService.showAllTechnology()
            const relationshipstatus = await relationshipStatusService.showAllrelationshipstatus()
            const deparments = await departmentService.showAllDepartent()

            console.log(deparments);
            

            res.render("index", {
                layout: 'base',
                title: 'Home Page',
                languages:languages,
                technologies:technologies,
                relationshipstatus:relationshipstatus,
                deparments:deparments,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new FormController();