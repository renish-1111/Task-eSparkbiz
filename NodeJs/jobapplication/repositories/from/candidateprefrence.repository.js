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

    async findById(id){
        const sql = 'SELECT cp.location,cp.department_id, d.name AS department_name,cp.notice_period,cp.expected_ctc,cp.current_ctc FROM candidate_prefrence AS cp JOIN deparments AS d  ON  d.id = cp.department_id  WHERE cp.candidate_id = ?;';
        const values = [id]
        const [result] = await this.db.execute(sql, values)

        return result;
    }
}

module.exports = CandidatePrefrenceRepository;