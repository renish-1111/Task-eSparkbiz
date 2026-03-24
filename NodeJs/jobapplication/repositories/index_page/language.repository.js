
class LanguageRepository {
    constructor(db){
        this.db = db;
    }

    async findAll() {
        const sql = "SELECT id, name FROM languages;"
        const result = await this.db.execute(sql)
        return result[0];
    }
}

module.exports = LanguageRepository;