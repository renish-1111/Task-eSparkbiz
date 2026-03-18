const BasicdetailRepository = require('../repositories/from/basicdetail.repository');
const AddressRepository = require("../repositories/from/address.repository")
const EducaitonRepository = require("../repositories/from/education.repository")
const CandidateLanguagesRepository = require("../repositories/from/candidatelanguages.repository")
const CandidateTechnologyRepository = require("../repositories/from/candidatetechnology.repository")
const CandidateReferanceRepository = require("../repositories/from/candidatereferance.repository")
const CandidatePrefrenceRepository = require("../repositories/from/candidateprefrence.repository")
const ExperienceRepository = require("../repositories/from/experience.repository")

const pool = require("../db/db.config")


class FormService {
    async submitForm(basicdetail, address, educations, languages, technologies, referances, prefrence, experiences) {
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
            const addressId = await addressRepository.create(basicdetailId, address);
            const educaitonIds = await educaitonRepository.create(basicdetailId, educations);
            const languageIds = await candidatelanguagesRepository.create(basicdetailId, languages);
            const technologyIds = await candidatetechnologyRepository.create(basicdetailId, technologies);
            const referanceIds = await candidatereferanceRepository.create(basicdetailId, referances);
            const prefrenceId = await candidateprefrenceRepository.create(basicdetailId, prefrence);
            const experienceIds = await experienceRepository.create(basicdetailId, experiences);

            await connection.commit();
            return [basicdetailId, addressId, educaitonIds, languageIds, technologyIds, referanceIds, prefrenceId, experienceIds];
        } catch (error) {
            console.log(error);
            await connection.rollback();
        }
        finally {
            connection.release();
        }
    }
    async showForm(id) {
        const connection = await pool.getConnection();

        try {
            const connection = await pool.getConnection();


            const basicdetailRepository = new BasicdetailRepository(connection);
            const addressRepository = new AddressRepository(connection)
            const educaitonRepository = new EducaitonRepository(connection)
            const candidatelanguagesRepository = new CandidateLanguagesRepository(connection);
            const candidatetechnologyRepository = new CandidateTechnologyRepository(connection);
            const candidatereferanceRepository = new CandidateReferanceRepository(connection);
            const candidateprefrenceRepository = new CandidatePrefrenceRepository(connection);
            const experienceRepository = new ExperienceRepository(connection);

            connection.beginTransaction();


            const basicdetail = await basicdetailRepository.findById(id);
            const address = await addressRepository.findById(id);
            const educaitons = await educaitonRepository.findById(id);
            const candidate_language = await candidatelanguagesRepository.findById(id);
            const candidate_technology = await candidatetechnologyRepository.findById(id);
            const referances = await candidatereferanceRepository.findById(id);
            const prefrence = await candidateprefrenceRepository.findById(id);
            const experiences = await experienceRepository.findById(id);

            await connection.commit();
            return {
                basicdetail: basicdetail,
                address: address,
                educaitons: educaitons,
                candidate_language: candidate_language,
                candidate_technology: candidate_technology,
                referances: referances,
                prefrence: prefrence,
                experiences: experiences,
            };
        } catch (error) {
            console.log(error);
            await connection.rollback();
        }
        finally {
            connection.release()
        }
    }

    async deleteForm(id){
        try {
            const basicdetailRepository = new BasicdetailRepository(pool);

            const rowEffect = await basicdetailRepository.delete(id)
            return rowEffect
        } catch (error) {
            console.log(error);
            
        }
    }
}

module.exports = new FormService();