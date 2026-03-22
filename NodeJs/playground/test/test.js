const StudentRepository = require("../repositories/student.repository")
const StudentService = require("../services/student.service")
const pool = require("../db/db.config")
const data = {
    serachString: "$r^p _r [9 ]S",
    sorting: "id,asc",
    page: 1,
    offset: 10,
    isAnd: false,
}

(async () => {
    try {
        let studentRepo = new StudentRepository(pool)
        await StudentService.getStudent(studentRepo, data)
    }
    catch{

    }

})()