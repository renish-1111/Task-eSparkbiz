const BasicdetailRepository = require('../repositories/basicdetail.repository');
const pool = require("../db/db.config")

class BasicDetailService {
    async createBasicDetail(basicdetail){
        const connection = await pool.getConnection();
        try {
            connection.beginTransaction();
            const basicdetailRepository = new BasicdetailRepository(connection);
            const basicdetailId = await basicdetailRepository.create(basicdetail);
            await connection.commit();
            return basicdetailId;
        } catch (error) {
            console.log(error);
            await connection.rollback();
        } finally {
            connection.release();
        }
    }
}

module.exports = new BasicDetailService();