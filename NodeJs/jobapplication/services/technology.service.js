const pool = require("../db/db.config")
const TechnologyRepository = require("../repositories/index_page/technology.repository")

const technologyRepository = new TechnologyRepository(pool)

class TechnologyService{
    async showAllTechnology(){
        try {
            const technologies = await technologyRepository.findAll();
            return technologies;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new TechnologyService()