const departmentRepository = require("../repositories/department.repository")

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