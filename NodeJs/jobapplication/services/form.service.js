let BasicdetailRepository = require('../repositories/from/basicdetail.repository');
let AddressRepository = require("../repositories/from/address.repository")
let EducaitonRepository = require("../repositories/from/education.repository")
let CandidateLanguagesRepository = require("../repositories/from/candidatelanguages.repository")
let CandidateTechnologyRepository = require("../repositories/from/candidatetechnology.repository")
let CandidateReferanceRepository = require("../repositories/from/candidatereferance.repository")
let CandidatePrefrenceRepository = require("../repositories/from/candidateprefrence.repository")
let ExperienceRepository = require("../repositories/from/experience.repository")

let pool = require("../db/db.config");
const { ca } = require('zod/v4/locales');


class FormService {
    async submitForm(basicdetail, address, educations, languages, technologies, referances, prefrence, experiences) {
        let connection = await pool.getConnection();
        try {
            await connection.beginTransaction();

            let basicdetailRepository = new BasicdetailRepository(connection);
            let addressRepository = new AddressRepository(connection)
            let educaitonRepository = new EducaitonRepository(connection)
            let candidatelanguagesRepository = new CandidateLanguagesRepository(connection);
            let candidatetechnologyRepository = new CandidateTechnologyRepository(connection);
            let candidatereferanceRepository = new CandidateReferanceRepository(connection);
            let candidateprefrenceRepository = new CandidatePrefrenceRepository(connection);
            let experienceRepository = new ExperienceRepository(connection);

            if (!basicdetail || !address || !prefrence) {
                throw new Error("Basicdetail, Address and Prefrence are required fields");
            }

            let basicdetailId = await basicdetailRepository.create(basicdetail);
            let addressId = await addressRepository.create(basicdetailId, address);
            let prefrenceId = await candidateprefrenceRepository.create(basicdetailId, prefrence);
            let educaitonIds = null;
            let languageIds = null;
            let technologyIds = null;
            let referanceIds = null;
            let experienceIds = null;

            if (educations) {
                educaitonIds = await educaitonRepository.create(basicdetailId, educations);
            }
            if (languages) {
                languageIds = await candidatelanguagesRepository.create(basicdetailId, languages);
            }
            if (technologies) {
                technologyIds = await candidatetechnologyRepository.create(basicdetailId, technologies);
            }
            if (referances) {
                referanceIds = await candidatereferanceRepository.create(basicdetailId, referances);
            }
            if (experiences) {
                experienceIds = await experienceRepository.create(basicdetailId, experiences);
            }

            console.log(basicdetailId);
            
            await connection.commit();            

            return [basicdetailId, addressId, educaitonIds, languageIds, technologyIds, referanceIds, prefrenceId, experienceIds];
        } catch (error) {
            console.log(error);
            await connection.rollback();
            throw error;
        }
        finally {
            connection.release();
        }
    }
    async showForm(id) {
        let connection = await pool.getConnection();

        try {
            let connection = await pool.getConnection();


            let basicdetailRepository = new BasicdetailRepository(connection);
            let addressRepository = new AddressRepository(connection)
            let educaitonRepository = new EducaitonRepository(connection)
            let candidatelanguagesRepository = new CandidateLanguagesRepository(connection);
            let candidatetechnologyRepository = new CandidateTechnologyRepository(connection);
            let candidatereferanceRepository = new CandidateReferanceRepository(connection);
            let candidateprefrenceRepository = new CandidatePrefrenceRepository(connection);
            let experienceRepository = new ExperienceRepository(connection);

            connection.beginTransaction();


            let basicdetail = await basicdetailRepository.findById(id);
            let address = await addressRepository.findById(id);
            let educaitons = await educaitonRepository.findById(id);
            let candidate_language = await candidatelanguagesRepository.findById(id);
            let candidate_technology = await candidatetechnologyRepository.findById(id);
            let referances = await candidatereferanceRepository.findById(id);
            let prefrence = await candidateprefrenceRepository.findById(id);
            let experiences = await experienceRepository.findById(id);

            basicdetail[0].bod = basicdetail[0].bod.toLocaleDateString()

            experiences.forEach(experience => {
                experience.from_date = new Date(experience.from_date).toISOString().split('T')[0]
                experience.to_date = new Date(experience.from_date).toISOString().split('T')[0]
            });


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

    async deleteForm(id) {
        try {
            let basicdetailRepository = new BasicdetailRepository(pool);

            let rowEffect = await basicdetailRepository.delete(id)
            return rowEffect
        } catch (error) {
            console.log(error);
        }
    }

    async editForm(oldid, basicdetail, address, educations, languages, technologies, referances, prefrence, experiences) {
        let connection = await pool.getConnection();
        try {

            connection.beginTransaction();

            if (!basicdetail || !address || !prefrence) {
                throw new Error("Basicdetail, Address and Prefrence are required fields");
            }

            let basicdetailRepository = new BasicdetailRepository(connection);
            let addressRepository = new AddressRepository(connection)
            let educaitonRepository = new EducaitonRepository(connection)
            let candidatelanguagesRepository = new CandidateLanguagesRepository(connection);
            let candidatetechnologyRepository = new CandidateTechnologyRepository(connection);
            let candidatereferanceRepository = new CandidateReferanceRepository(connection);
            let candidateprefrenceRepository = new CandidatePrefrenceRepository(connection);
            let experienceRepository = new ExperienceRepository(connection);

            let deleteBasicDetailRow = await basicdetailRepository.delete(oldid)
            let basicdetailId = await basicdetailRepository.create(basicdetail);
            let newid = basicdetailId;
            let addressId = await addressRepository.create(basicdetailId, address);
            let prefrenceId = await candidateprefrenceRepository.create(basicdetailId, prefrence);

            if (educations) {
                 educaitonIds = await educaitonRepository.create(basicdetailId, educations);
            }
            if (languages) {
                 languageIds = await candidatelanguagesRepository.create(basicdetailId, languages);
            }
            if (technologies) {
                 technologyIds = await candidatetechnologyRepository.create(basicdetailId, technologies);
            }
            if (referances) {
                 referanceIds = await candidatereferanceRepository.create(basicdetailId, referances);
            }
            if (experiences) {
                 experienceIds = await experienceRepository.create(basicdetailId, experiences);
            }

            let updateBasicDetailId = await basicdetailRepository.updateId(oldid, newid)

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

}

module.exports = new FormService();