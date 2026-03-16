const connection = require("../db/db.config")

class Technology {
    async findAll() {
            const sql = "SELECT id, name FROM technologies;"
            const result = await connection.execute(sql)
            return result[0];

    }
}

module.exports = new Technology();