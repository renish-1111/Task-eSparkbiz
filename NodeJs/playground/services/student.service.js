const StudentRepository  = require("../repositories/student.repository")
const pool = require("../db/db.config")
const studentRepository = new StudentRepository(pool)
class StudentService {
    
    async getStudent( data) {
        let serachString = data.serachString;
        let sorting = data.sorting;
        let page = data.page;
        let offset = data.offset;
        let isAnd = data.isAnd || 0; 

        if (page < 1) {
            page = 1
        }

        let limit = (page - 1) * offset

        serachString = serachString.replaceAll(" ", "")
        let pos = {
            fname: "",
            lname: "",
            phone: "",
            email: "",
            city: "",

        }

        let count = 0;
        for (let i = 0; i < serachString.length; i++) {
            const element = serachString[i];

            if (element == "$") {
                pos.fname = count++
            }
            else if (element == "^") {
                pos.lname = count++
            }
            else if (element == "_") {
                pos.email = count++
            }
            else if (element == "[") {
                pos.phone = count++
            }
            else if (element == "]") {
                pos.city = count++
            }
        }
         
        serachString = serachString.split(/[$^_\\[\]]/)
        serachString = serachString.slice(1)

        let sqlCondition = [` WHERE fname LIKE '${serachString[pos.fname] || ''}%'`, `lname LIKE '${serachString[pos.lname]}%'`, `email LIKE '${serachString[pos.email]}%'`, `phone LIKE '${serachString[pos.phone]}%'`, `city LIKE '${serachString[pos.city]}%' `]

        if (isAnd) {
            sqlCondition = sqlCondition.join(" AND ")
        }
        else {
            sqlCondition = sqlCondition.join(" OR ")
        }
        let sortparameter = sorting.split(",")

        sqlCondition += ` ORDER BY ${sortparameter[0]} ${sortparameter[1]}`

        console.log(sqlCondition);

        try {
            return await studentRepository.findAll(sqlCondition, limit, offset)           
        } catch (error) {
            console.log(error);
            
        }


    }

}

module.exports = new StudentService();