
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

    async findById(id){
        const sql = 'SELECT bd.id, bd.fname, bd.lname, bd.designation, bd.email, bd.phone, bd.gender, bd.bod, bd.relationship_status_id, rs.name AS relationship_status_name FROM basic_details AS bd JOIN relationship_status AS rs ON rs.id = bd.relationship_status_id WHERE bd.id = ?;';
        const values = [id]
        const [result] = await this.db.execute(sql, values)

        return result;
    }

    async delete(id){
        const sql = "DELETE FROM basic_details WHERE id = ?;";
        const value = [id];
        const [result] = await this.db.execute(sql, value)

        return result.affectedRows
    }
}

module.exports = BasicDetailRepository;