class RelationshipStatusRepository {
    constructor(db){
        this.db = db;
    }

    async findAll() {
        const sql = "SELECT id, name FROM relationship_status;"
        const result = await this.db.execute(sql)
        return result[0];
    }
}

module.exports = RelationshipStatusRepository;