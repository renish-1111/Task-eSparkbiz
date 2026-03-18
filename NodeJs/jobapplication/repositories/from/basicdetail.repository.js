
class BasicDetailRepository {

    constructor(db) {
        this.db = db;
    }

    async create(basicdetail) {
        const { fname, lname, email, phone, gender, relationshipstatus, designation, bod } = basicdetail;
        const sql = `INSERT INTO basic_details (fname, lname, email, phone, gender, relationship_status_id, designation, bod) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [fname, lname, email, phone, gender, relationshipstatus, designation, bod];
        const [result] = await this.db.execute(sql, values);
        return result.insertId;
    }

    async findAllPreview(){
        const sql = "SELECT id, fname, lname, email FROM basic_details;"
        const [result] = await this.db.execute(sql);
        return result;
    }
}

module.exports = BasicDetailRepository;