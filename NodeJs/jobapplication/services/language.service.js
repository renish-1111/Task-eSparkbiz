const pool = require("../db/db.config")
const LanguageRepository = require("../repositories/language.repository")

const languageRepository = new LanguageRepository(pool)

class LanguageService{
    async showAllLanguage(){
        try {
            const languages = await languageRepository.findAll();
            return languages;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LanguageService()