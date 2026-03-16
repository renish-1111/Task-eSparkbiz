const languageRepo = require("../repositories/language.repository")

class LanguageService{
    async showAllLanguage(){
        try {
            const languages = await languageRepo.findAll();
            return languages;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LanguageService()