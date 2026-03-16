const connection = require("../db/db.config")

class RelationshipStatusRepository {
    async findAll() {
        const sql = "SELECT id, name FROM relationship_status;"
        const result = await connection.execute(sql)
        return result[0];
    }
}

module.exports = new RelationshipStatusRepository();