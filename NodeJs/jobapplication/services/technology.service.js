const technologyRepo = require("../repositories/technology.repository")

class TechnologyService{
    async showAllTechnology(){
        try {
            const technologies = await technologyRepo.findAll();
            return technologies;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new TechnologyService()