
class TechnologyRepository {

    constructor(db){
        this.db = db;
    }

    async findAll() {
            const sql = "SELECT id, name FROM technologies;"
            const result = await this.db.execute(sql)
            return result[0];

    }
}

module.exports = TechnologyRepository;