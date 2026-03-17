class CandidateReferanceRepository{
    constructor(db){
        this.db = db
    }
    async create(candidate_id, referances) {
        let referanceIds = [];
        referances.forEach(async referance => {
            const { referance_name, referance_contact, referance_relation } = referance;
            const sql = "INSERT INTO candidate_referance (candidate_id, ref_name, ref_contact, relations) VALUES (?, ?, ?, ?);";
            const values = [candidate_id, referance_name, referance_contact, referance_relation];            
            const [result] = await this.db.execute(sql, values);
            referanceIds.push(result.insertId);
        });
        return referanceIds;
    }
}

module.exports = CandidateReferanceRepository;