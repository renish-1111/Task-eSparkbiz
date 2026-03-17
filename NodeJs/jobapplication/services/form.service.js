const BasicdetailRepository = require('../repositories/basicdetail.repository');
const AddressRepository = require("../repositories/address.repository")
const EducaitonRepository  =require("../repositories/education.repository")
const pool = require("../db/db.config")

class FormService {
    async submitForm(basicdetail,address,educations){
        const connection = await pool.getConnection();
        try {
            connection.beginTransaction();
            const basicdetailRepository = new BasicdetailRepository(connection);
            const addressRepository = new AddressRepository(connection)
            const educaitonRepository = new EducaitonRepository(connection)

            const basicdetailId = await basicdetailRepository.create(basicdetail);
            const addressId  = await addressRepository.create(basicdetailId,address);
            const educaitonIds = await educaitonRepository.create(basicdetailId,educations);

            await connection.commit();
            return [basicdetailId,addressId,educaitonIds];
        } catch (error) {
            console.log(error);
            await connection.rollback();
        } finally {
            connection.release();
        }
    }
}

module.exports = new FormService();