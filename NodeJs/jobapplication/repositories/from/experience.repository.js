class ExperienceRepository {
    constructor(db) {
        this.db = db;
    }

    async create(candidate_id, experiences) {
        const experienceIds = [];
        experiences.forEach(async experience => {
            const { company_name, designation, from_date, to_date } = experience;
            const sql = `INSERT INTO experience (candidate_id, company_name, designation, from_date, to_date) VALUES (?, ?, ?, ?, ?)`;
            const values = [candidate_id, company_name, designation, from_date, to_date];
            const [result] = await this.db.execute(sql, values);
            experienceIds.push(result.insertId);
        });
        return experienceIds;
    }

     async findById(id){
        const sql = 'SELECT company_name, designation, from_date, to_date FROM experience WHERE candidate_id = ?;';
        const values = [id]
        const [result] = await this.db.execute(sql, values)

        return result;
    }
}

module.exports = ExperienceRepository;