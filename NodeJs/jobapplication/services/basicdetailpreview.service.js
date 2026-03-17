const pool = require("../db/db.config");
const BasicDetailRepository = require("../repositories/view_page/basicdetail_preview.repository")

const basicdetailRepository = new BasicDetailRepository(pool)

class BasicDetailPreviewService{

    async showDetail(){
        try {
            const basicdetailspreview = await basicdetailRepository.findAll();
            return basicdetailspreview;
        } catch (error) {
            console.log("error" , error);
        }
    }
}

module.exports = new BasicDetailPreviewService();