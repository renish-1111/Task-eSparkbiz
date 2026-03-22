const StudentRepository = require("../repositories/student.repository");
const studentService = require("../services/student.service");
const pool = require("../db/db.config")

class StudentController {

    async searchStudent(req, res, next) {
        try {

            const studentRepository = new StudentRepository(pool);

            let dataParam = {
                page: parseInt(req.query.page) || 1,
                offset: parseInt(req.query.offset) || 100,
                serachString: req.query.search || "",
                isAnd: req.query.isAnd || 0,
                sorting: req.query.sorting || "id,asc"
            }

            let [data,total] = await studentService.getStudent(dataParam);
            console.log(total);
            
            res.render("index", { data, page: dataParam.page, total: Math.ceil(total[0].total/dataParam.offset) })
        } catch (error) {
            console.log(error);

        }

    }
}
module.exports = new StudentController();