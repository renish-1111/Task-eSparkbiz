const pool = require("../db/db.config");

class AddressRepository{
    constructor(db){
        this.db = db
    }

    async create(candidate_id,address){
        const {address1,address2,state,city,zipcode} = address
        const sql = "INSERT INTO addresses (candidate_id, address1, address2,`state`, city, zipcode ) VALUES (?, ?, ?, ?, ?, ?);"
        const values = [candidate_id,address1,address2,state,city,zipcode]
        const [result] = await this.db.execute(sql,values);
        return result.insertId;
    }
}

module.exports = AddressRepository;