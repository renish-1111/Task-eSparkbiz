class StudentRepository{
    constructor(db){
        this.db = db;
    }

    async findAll(sqlCondition, limit, offset){
        console.log(typeof limit);
        
        let values = [String(limit),String(offset)];

        let sql = 'SELECT id, fname, lname, email, phone, city FROM student ' + sqlCondition +' LIMIT ? , ? ;'
        
        console.log(sql, values);
        
        const [result] = await this.db.execute(sql, values)
        console.log("result",result);
        
        return result
    }
}

module.exports = StudentRepository;