class CandidatePrefrenceRepository{
    constructor(db){
        this.db = db
    }

    async create(candidate_id, prefrence){
        const{preferd_location,notice_period,expacted_ctc,current_ctc,department} = prefrence;
        const sql = "INSERT INTO candidate_prefrence (candidate_id,location,department_id,notice_period,expected_ctc,current_ctc) VALUES (?, ?, ?, ?, ?, ?)"
        const values = [candidate_id, preferd_location,department,notice_period,expacted_ctc,current_ctc]

        const [result] = await this.db.execute(sql, values);
        return result.insertId;
    }
}

module.exports = CandidatePrefrenceRepository;