
class CandidateLanguagesRepository {
    constructor(db) {
        this.db = db
    }

    async create(candidate_id, languages) {
        let languageIds = [];
        languages.forEach(async language => {
            const { id, read, write, speak } = language;
            const sql = "INSERT INTO candidate_languages (candidate_id, language_id, can_read, can_write, can_speak) VALUES (?, ?, ?, ?, ?);";
            const values = [candidate_id, id, read, write, speak];
            console.log(values);
            
            const [result] = await this.db.execute(sql, values);
            languageIds.push(result.insertId);
        });
        return languageIds;
    }

    async findById(id){
        const sql = 'SELECT cl.language_id, l.name, cl.can_read, cl.can_write, cl.can_speak FROM candidate_languages AS cl JOIN languages AS l ON l.id = cl.language_id  WHERE cl.candidate_id = ?;';
        const values = [id]
        const [result] = await this.db.execute(sql, values)

        return result;
    }

}

module.exports = CandidateLanguagesRepository;