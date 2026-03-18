const pool = require("../db/db.config");
const BasicDetailRepository = require("../repositories/from/basicdetail.repository");

const basicdetailRepository = new BasicDetailRepository(pool)

class BasicDetailPreviewService{

    async showDetailPreview(){
        try {
            const basicdetailspreview = await basicdetailRepository.findAllPreview();
            return basicdetailspreview;
        } catch (error) {
            console.log("error" , error);
        }
    }
}

module.exports = new BasicDetailPreviewService();