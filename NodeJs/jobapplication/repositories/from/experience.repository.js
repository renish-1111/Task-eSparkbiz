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
}

module.exports = ExperienceRepository;