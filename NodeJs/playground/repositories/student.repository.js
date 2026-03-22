class StudentRepository{
    constructor(db){
        this.db = db;
    }

    async findAll(sqlCondition, limit, offset){
        console.log(typeof limit);
        
        let values = [String(limit),String(offset)];

        let sql = 'SELECT id, fname, lname, email, phone, city FROM student ' + sqlCondition +' LIMIT ? , ? ;'
                
        const [result] = await this.db.execute(sql, values)
        
        return result
    }
    async count(sqlCondition){
        

        let sql = 'SELECT COUNT(id) AS total FROM student ' + sqlCondition 
                
        const [result] = await this.db.execute(sql)
        console.log(result);
        
        return result
    }
}

module.exports = StudentRepository;