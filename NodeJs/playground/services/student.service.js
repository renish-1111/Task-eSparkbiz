const StudentRepository = require("../repositories/student.repository")
const pool = require("../db/db.config")
const studentRepository = new StudentRepository(pool)
class StudentService {

    async getStudent(data) {
        let serachString = data.serachString || "";
        let sorting = data.sorting || "id,asc";
        let page = data.page || 1;
        let offset = data.offset || 100;
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

        let sqlCondition = []
        if (serachString[pos.fname]) {
            sqlCondition.push(`fname LIKE '${serachString[pos.fname]}%'`)
        }
        if (serachString[pos.lname]) {
            sqlCondition.push(`lname LIKE '${serachString[pos.lname]}%'`)
        }
        if (serachString[pos.email]) {
            sqlCondition.push(`email LIKE '${serachString[pos.email]}%'`)
        }
        if (serachString[pos.phone]) {
            sqlCondition.push(`phone LIKE '${serachString[pos.phone]}%'`)
        }
        if (serachString[pos.city]) {
            sqlCondition.push(`city LIKE '${serachString[pos.city]}%'`)
        }

        if (sqlCondition.length > 0) {
            sqlCondition[0] = "WHERE " + sqlCondition[0]
        }

        console.log("Boolean(isAnd)",);
        
        if (Boolean(Number(isAnd))) {
            console.log(sqlCondition);
            console.log("service AND", isAnd);

            sqlCondition = sqlCondition.join(" AND ")
        }
        else {
            console.log(sqlCondition);
            console.log("service OR", isAnd);

            sqlCondition = sqlCondition.join(" OR ")
        }

        let sortparameter = sorting.split(",")


        sqlCondition += ` ORDER BY ${sortparameter[0]} ${sortparameter[1]}`

        console.log(sqlCondition);

        try {
            return [await studentRepository.findAll(sqlCondition, limit, offset), await studentRepository.count(sqlCondition)]
        } catch (error) {
            console.log(error);
        }


    }

}

module.exports = new StudentService();