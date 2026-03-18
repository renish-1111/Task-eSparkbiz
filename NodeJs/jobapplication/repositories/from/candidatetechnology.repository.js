
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

    async findById(id){
        const sql = 'SELECT t.id, t.name, ct.experty_level FROM candidate_technologies AS ct JOIN technologies AS t ON t.id = ct.technology_id WHERE ct.candidate_id = ?;';
        const values = [id]
        const [result] = await this.db.execute(sql, values)

        return result;
    }

}

module.exports = CandidateTechnologyRepository;