const BasicdetailRepository = require('../repositories/basicdetail.repository');
const AddressRepository = require("../repositories/address.repository")
const EducaitonRepository  =require("../repositories/education.repository")
const CandidateLanguagesRepository  =require("../repositories/candidatelanguages.repository")
const CandidateTechnologyRepository  =require("../repositories/candidatetechnology.repository")
const CandidateReferanceRepository  =require("../repositories/candidatereferance.repository")
const CandidatePrefrenceRepository = require("../repositories/candidateprefrence.repository")
const pool = require("../db/db.config")

class FormService {
    async submitForm(basicdetail,address,educations,languages,technologies,referances, prefrence){
        const connection = await pool.getConnection();
        try {

            connection.beginTransaction();
            const basicdetailRepository = new BasicdetailRepository(connection);
            const addressRepository = new AddressRepository(connection)
            const educaitonRepository = new EducaitonRepository(connection)
            const candidatelanguagesRepository = new CandidateLanguagesRepository(connection);
            const candidatetechnologyRepository = new CandidateTechnologyRepository(connection);
            const candidatereferanceRepository = new CandidateReferanceRepository(connection)
            const candidateprefrenceRepository = new CandidatePrefrenceRepository(connection)

            const basicdetailId = await basicdetailRepository.create(basicdetail);
            const addressId  = await addressRepository.create(basicdetailId,address);
            const educaitonIds = await educaitonRepository.create(basicdetailId,educations);
            const languageIds = await candidatelanguagesRepository.create(basicdetailId,languages);
            const technologyIds = await candidatetechnologyRepository.create(basicdetailId,technologies);
            const referanceIds = await candidatereferanceRepository.create(basicdetailId,referances);
            const prefrenceId = await candidateprefrenceRepository.create(basicdetailId, prefrence);

            await connection.commit();
            return [basicdetailId, addressId, educaitonIds, languageIds, technologyIds, referanceIds, prefrenceId];
        } catch (error) {
            console.log(error);
            await connection.rollback();
        } finally {
            connection.release();
        }
    }
}

module.exports = new FormService();