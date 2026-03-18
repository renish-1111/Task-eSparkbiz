

class EductionRepository {
    constructor(db) {
        this.db = db
    }

    async create(candidate_id, educations){
        let educationIds = [];
        educations.forEach(async education => {
            const{degree_name, university, passing_year, percentage} = education;
            const sql = "INSERT INTO educations (candidate_id, degree_name, university, passing_year, percentage) VALUES (?, ?, ?, ?, ?);";
            const values = [candidate_id, degree_name, university, passing_year, percentage];
            
            const [result] = await this.db.execute(sql,values);
            educationIds.push(result.insertId);
        });
        return educationIds;
    }

    async findById(id){
        const sql = 'SELECT degree_name, university, passing_year, percentage FROM educations WHERE candidate_id = ?;';
        const values = [id]
        const [result] = await this.db.execute(sql, values)

        return result;
    }

}

module.exports = EductionRepository;