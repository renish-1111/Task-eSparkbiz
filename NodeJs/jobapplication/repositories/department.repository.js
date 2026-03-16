const connection = require("../db/db.config")

class DeparmentRepository {
    async findAll(){
        const sql = "SELECT id, name FROM deparments;"
        const result = await connection.execute(sql);
        return result[0]
    }
}

module.exports = new DeparmentRepository()