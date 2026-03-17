class BasicDetailPreview{
    constructor(db){
        this.db = db;
    }

    async findAll(){
        const sql = "SELECT id, fname, lname, email FROM basic_details;"
        const [result] = await this.db.execute(sql);

        return result;
    }
}

module.exports = BasicDetailPreview;