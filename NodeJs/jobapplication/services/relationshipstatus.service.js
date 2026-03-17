const pool = require("../db/db.config")
const RelationshipStatusRepository = require("../repositories/relationshipstatus.repository")

const relationshipStatusRepository = new RelationshipStatusRepository(pool)

class RelationshipStatusService {
    async showAllRelationshipStatus() {
        try {
            const relationshipstatus = await relationshipStatusRepository.findAll();
            return relationshipstatus;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new RelationshipStatusService()