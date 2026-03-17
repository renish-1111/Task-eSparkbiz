
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

}

module.exports = CandidateLanguagesRepository;