
class CandidateTechnologyRepository {
    constructor(db) {
        this.db = db
    }

    async create(candidate_id, technologies) {
        let technologyIds = [];
        technologies.forEach(async technology => {
            const { id, level } = technology;
            const sql = "INSERT INTO candidate_technologies (candidate_id, technology_id, experty_level) VALUES (?, ?, ?);";
            const values = [candidate_id, id, level];
            console.log(values);
            
            const [result] = await this.db.execute(sql, values);
            technologyIds.push(result.insertId);
        });
        return technologyIds;
    }

}

module.exports = CandidateTechnologyRepository;