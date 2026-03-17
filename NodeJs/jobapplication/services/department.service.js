const pool = require("../db/db.config")
const DepartmentRepository = require("../repositories/department.repository")

const departmentRepository = new DepartmentRepository(pool)

class DepartmentService {
    async showAllDepartent() {
        try {
            const departments = await departmentRepository.findAll();
            return departments
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new DepartmentService() 