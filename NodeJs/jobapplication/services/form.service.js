const BasicdetailRepository = require('../repositories/from/basicdetail.repository');
const AddressRepository = require("../repositories/from/address.repository")
const EducaitonRepository  =require("../repositories/from/education.repository")
const CandidateLanguagesRepository  =require("../repositories/from/candidatelanguages.repository")
const CandidateTechnologyRepository  =require("../repositories/from/candidatetechnology.repository")
const CandidateReferanceRepository  =require("../repositories/from/candidatereferance.repository")
const CandidatePrefrenceRepository = require("../repositories/from/candidateprefrence.repository")
const ExperienceRepository = require("../repositories/from/experience.repository")
const pool = require("../db/db.config")

class FormService {
    async submitForm(basicdetail,address,educations,languages,technologies,referances, prefrence, experiences){
        const connection = await pool.getConnection();
        try {

            connection.beginTransaction();
            const basicdetailRepository = new BasicdetailRepository(connection);
            const addressRepository = new AddressRepository(connection)
            const educaitonRepository = new EducaitonRepository(connection)
            const candidatelanguagesRepository = new CandidateLanguagesRepository(connection);
            const candidatetechnologyRepository = new CandidateTechnologyRepository(connection);
            const candidatereferanceRepository = new CandidateReferanceRepository(connection);
            const candidateprefrenceRepository = new CandidatePrefrenceRepository(connection);
            const experienceRepository = new ExperienceRepository(connection);

            const basicdetailId = await basicdetailRepository.create(basicdetail);
            const addressId  = await addressRepository.create(basicdetailId,address);
            const educaitonIds = await educaitonRepository.create(basicdetailId,educations);
            const languageIds = await candidatelanguagesRepository.create(basicdetailId,languages);
            const technologyIds = await candidatetechnologyRepository.create(basicdetailId,technologies);
            const referanceIds = await candidatereferanceRepository.create(basicdetailId,referances);
            const prefrenceId = await candidateprefrenceRepository.create(basicdetailId, prefrence);
            const experienceIds =  await experienceRepository.create(basicdetailId, experiences);

            await connection.commit();
            return [basicdetailId, addressId, educaitonIds, languageIds, technologyIds, referanceIds, prefrenceId, experienceIds];
        } catch (error) {
            console.log(error);
            await connection.rollback();
        } finally {
            connection.release();
        }
    }
}

module.exports = new FormService();