const connection = require("../db/db.config")

class Language {
    async findAll() {
        const sql = "SELECT id, name FROM languages;"
        const result = await connection.execute(sql)
        return result[0];
    }
}

module.exports = new Language();