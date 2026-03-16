const relationshipStatusRepository = require("../repositories/relationshipstatus.repository")

class RelationshipStatusService {

    async showAllrelationshipstatus() {
        
        try {
            const relationshipstatus = await relationshipStatusRepository.findAll();
            return relationshipstatus;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new RelationshipStatusService()