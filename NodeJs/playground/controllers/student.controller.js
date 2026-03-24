const StudentRepository = require("../repositories/student.repository");
const studentService = require("../services/student.service");
const pool = require("../db/db.config")

class StudentController {

    async searchStudent(req, res, next) {
        try {

            const studentRepository = new StudentRepository(pool);

            let data = {
                page: parseInt(req.query.page) || 1,
                offset: parseInt(req.query.offset) || 100,
                serachString: req.query.serachString || "$r",
                isAnd: req.query.isAnd || false,
                sorting: req.query.sorting || "id,asc"
            }

            res.send(await studentService.getStudent(data))

        } catch (error) {
            console.log(error);

        }

    }
}
module.exports = new StudentController();