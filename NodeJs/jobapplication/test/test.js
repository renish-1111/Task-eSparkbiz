const pool = require("../db/db.config")
const BasicDetailRepository = require("../repositories/from/basicdetail.repository");
const EductionRepository = require("../repositories/from/education.repository");
const LanguageRepository = require("../repositories/index_page/language.repository");
const CandidatelanguagesRepository = require("../repositories/from/candidatelanguages.repository");
const CandidateTechnologyRepository = require("../repositories/from/candidatetechnology.repository");
const CandidatePrefrenceRepository = require("../repositories/from/candidateprefrence.repository");
(async () => {
    try {
        console.log("BasicDetailRepositorytart");

        const obj = new BasicDetailRepository(pool)
        const data = await obj.findById(7)
        console.log(data);
    } catch (error) {
        console.log(error);

    }

    try {
        console.log("CandidatelanguagesRepository");

        const obj = new CandidatelanguagesRepository(pool)
        const data = await obj.findById(27)
        console.log(data);
    } catch (error) {
        console.log(error);

    }
    try {
        console.log("LanguageRepository");

        const obj = new LanguageRepository(pool)
        const data = await obj.findAll()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    try {
        console.log("CandidateTechnologyRepository");

        const obj = new CandidateTechnologyRepository(pool)
        const data = await obj.findById(27)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    try {
        console.log("CandidatePrefrenceRepository");

        const obj = new CandidatePrefrenceRepository(pool)
        const data = await obj.findById(31)
        console.log(data);
    } catch (error) {
        console.log(error);
    }

})()

