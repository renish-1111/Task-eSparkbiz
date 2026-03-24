const languageService = require("../services/language.service")
const technologyService = require("../services/technology.service")
const relationshipStatusService = require("../services/relationshipstatus.service")
const departmentService = require("../services/department.service")
const formService = require("../services/form.service");
const basicdetailpreviewService = require("../services/basicdetailpreview.service")
const connection = require("../db/db.config")
const basicdetailSchema = require("../validation/basic_detail")
const addreshSchema = require("../validation/address");
const educationSchema = require("../validation/education");
const experienceSchema = require("../validation/experience");
const candidate_referanceSchema = require("../validation/candidate_referance");
const prefrenceSchema = require("../validation/prefrence");
class FormController {

    // form design show at index.ejs
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
    // formentry table preview at view.ejs
    async showEntry(req, res, next) {

        const basicdetailpreview = await basicdetailpreviewService.showDetailPreview();
        console.log(basicdetailpreview);

        res.render("view", {
            layout: 'base',
            title: 'View Page',
            basicdetailpreview: basicdetailpreview,
        });
    }

    // post req /form store in db
    async submitForm(req, res, next) {
        try {
            const formData = req.body;
            console.log(formData);

            const basicdetail = {
                fname: formData.fname,
                lname: formData.lname,
                email: formData.email,
                phone: formData.phone,
                gender: formData.gender,
                relationshipstatus: parseInt(formData.relationshipstatus),
                designation: formData.designation,
                bod: new Date(formData.bod),
            }
            let reuslt = basicdetailSchema.parse(basicdetail);
            console.log(reuslt);



            const address = {
                address1: formData.address1,
                address2: formData.address2,
                state: formData.state,
                city: formData.city,
                zipcode: formData.zipcode,
            }
            addreshSchema.parse(address)
            // const educations = { degree_name:req.body.course_name, university:req.body.course_degree, passing_year:req.body.course_pass, percentage:req.body.course_percentage };
            const degree_name = req.body.course_name;
            const university = req.body.university;
            const passing_year = req.body.course_pass;
            const percentage = req.body.course_percentage;

            let educations = [];
            if (degree_name) {
                for (let i = 0; i < degree_name.length; i++) {
                    let education = {
                        degree_name: degree_name[i],
                        university: university[i],
                        passing_year: passing_year[i],
                        percentage: percentage[i]
                    }
                    educationSchema.parse(education)

                    educations.push(education);
                }
            }


            let languages_row = req.body.languages;
            let languages = []
            if (languages_row) {
                Object.keys(languages_row).map(function (key) {
                    console.log(key);
                    languages.push({
                        id: Number(key.replace("'", "").replace("'", "")),
                        read: Number(languages_row[key].read) || 0,
                        write: Number(languages_row[key].write) || 0,
                        speak: Number(languages_row[key].speak) || 0,
                    })
                });
            }

            let technologies_row = req.body.technologies
            let technologies = []
            if (technologies_row) {
                Object.keys(technologies_row).map(function (key) {
                    console.log(key);
                    technologies.push({
                        id: Number(key.replace("'", "").replace("'", "")),
                        level: Number(technologies_row[key]),
                    })
                });
            }


            const referance_name = req.body.referance_name;
            const referance_contact = req.body.referance_contact;
            const referance_relation = req.body.referance_relation;

            let referances = [];
            if (referance_name) {
                for (let i = 0; i < referance_name.length; i++) {
                    referances.push(
                        {
                            referance_name: referance_name[i],
                            referance_contact: referance_contact[i],
                            referance_relation: referance_relation[i],
                        }
                    )
                }
            }

            const prefrence = {
                preferd_location: req.body.preferd_location,
                department: parseInt(req.body.department),
                notice_period: req.body.notice_period,
                expacted_ctc: req.body.expacted_ctc,
                current_ctc: req.body.current_ctc,
            }
            prefrenceSchema.parse(prefrence)

            const company_name = req.body.company_name;
            const company_designation = req.body.company_designation;
            const company_from = req.body.company_from;
            const company_to = req.body.company_to;

            let experiences = [];
            if (company_name) {
                for (let i = 0; i < company_name.length; i++) {
                    let experience = {
                        company_name: company_name[i],
                        designation: company_designation[i],
                        from_date: company_from[i],
                        to_date: company_to[i],
                    }
                    experienceSchema.parse(experience)

                    experiences.push(experience)
                }
            }




            const [basicdetailId, addressId, educationIds, languageIds, technologyIds, referanceIds, prefrenceId, experienceIds] = await formService.submitForm(basicdetail, address, educations, languages, technologies, referances, prefrence, experiences);

            res.status(302).redirect('/view');
        } catch (error) {
            res.send(`An error occurred while submitting the form: ${error}`);
        }
    }

    async viewForm(req, res, next) {
        const id = parseInt(req.params.id)
        const formdata = await formService.showForm(id);

        console.log(formdata);
        res.render("application", {
            layout: 'base',
            title: 'Application Page',
            formdata
        });

    }
    async editViewForm(req, res, next) {
        const id = parseInt(req.params.id)
        const formdata = await formService.showForm(id);

        const languages = await languageService.showAllLanguage()
        const technologies = await technologyService.showAllTechnology()
        const relationshipstatus = await relationshipStatusService.showAllRelationshipStatus()
        const deparments = await departmentService.showAllDepartent()

        console.log(formdata);
        res.render("edit", {
            layout: 'base',
            title: 'Edit Page',
            formdata,
            languages: languages,
            technologies: technologies,
            relationshipstatus: relationshipstatus,
            deparments: deparments,

        });
    }

    async editForm(req, res, next) {
        const oldid = parseInt(req.params.id)
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
                relationshipstatus: parseInt(formData.relationshipstatus),
                designation: formData.designation,
                bod: new Date(formData.bod),
            }
            basicdetailSchema.parse(basicdetail);



            const address = {
                address1: formData.address1,
                address2: formData.address2,
                state: formData.state,
                city: formData.city,
                zipcode: formData.zipcode,
            }
            addreshSchema.parse(address)


            // const educations = { degree_name:req.body.course_name, university:req.body.course_degree, passing_year:req.body.course_pass, percentage:req.body.course_percentage };
            const degree_name = req.body.course_name;
            const university = req.body.university;
            const passing_year = req.body.course_pass;
            const percentage = req.body.course_percentage;

            let educations = [];
            if (degree_name) {
                for (let i = 0; i < degree_name.length; i++) {
                    let education = {
                        degree_name: degree_name[i],
                        university: university[i],
                        passing_year: passing_year[i],
                        percentage: percentage[i]
                    }
                    educationSchema.parse(education)

                    educations.push(education);
                }
            }

            let languages_row = req.body.languages;
            let languages = []
            if (languages_row) {
                Object.keys(languages_row).map(function (key) {
                    console.log(key);
                    languages.push({
                        id: Number(key.replace("'", "").replace("'", "")),
                        read: Number(languages_row[key].read) || 0,
                        write: Number(languages_row[key].write) || 0,
                        speak: Number(languages_row[key].speak) || 0,
                    })
                });
            }


            let technologies_row = req.body.technologies
            let technologies = []
            if (technologies_row) {
                Object.keys(technologies_row).map(function (key) {
                    console.log(key);
                    technologies.push({
                        id: Number(key.replace("'", "").replace("'", "")),
                        level: Number(technologies_row[key]),
                    })
                });
            }


            const referance_name = req.body.referance_name;
            const referance_contact = req.body.referance_contact;
            const referance_relation = req.body.referance_relation;


            let referances = [];
            if (referance_name) {
                for (let i = 0; i < referance_name.length; i++) {
                    referances.push(
                        {
                            referance_name: referance_name[i],
                            referance_contact: referance_contact[i],
                            referance_relation: referance_relation[i],
                        }
                    )
                }
            }

            const prefrence = {
                preferd_location: req.body.preferd_location,
                department: req.body.department,
                notice_period: req.body.notice_period,
                expacted_ctc: req.body.expacted_ctc,
                current_ctc: req.body.current_ctc,
            }
            prefrenceSchema.parse(prefrence)


            const company_name = req.body.company_name;
            const company_designation = req.body.company_designation;
            const company_from = req.body.company_from;
            const company_to = req.body.company_to;

            let experiences = [];
            if (company_name) {
                for (let i = 0; i < company_name.length; i++) {
                    let experience = {
                        company_name: company_name[i],
                        designation: company_designation[i],
                        from_date: company_from[i],
                        to_date: company_to[i],
                    }
                    experienceSchema.parse(experience)

                    experiences.push(experience)
                }
            }




            const [basicdetailId, addressId, educationIds, languageIds, technologyIds, referanceIds, prefrenceId, experienceIds] = await formService.editForm(oldid, basicdetail, address, educations, languages, technologies, referances, prefrence, experiences);

            res.status(302).redirect('/view');
        } catch (error) {
            console.log(error.message);
            res.status(500).send(`An error occurred while submitting the form : ${error.message}`);
        }
    }

    async deleteForm(req, res, next) {
        try {
            const id = parseInt(req.params.id)
            const rowDeleted = await formService.deleteForm(id);
            res.redirect("/view");

        } catch (error) {
            console.log(error);
            res.redirect("/view");
        }


    }


}

module.exports = new FormController();