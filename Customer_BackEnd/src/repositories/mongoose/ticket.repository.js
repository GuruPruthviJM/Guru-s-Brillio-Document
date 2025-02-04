const { MongooseRepository } = require("ca-webutils");

class MongooseTicketRepository extends MongooseRepository{
    constructor(model){
        super(model);
    }

    async getTicketByCustId(matcher = {}) {
        console.log(matcher); // matcher= {customerId: "guru-pruthvi"}

        return this.model.find(matcher)
        .populate({ 
            path: 'customerId',
            model: 'customer', 
            localField: 'customerId', 
            foreignField: 'customerID',
            });

        // return await this.model.find({}).populate('customerID')
    }
} 

MongooseTicketRepository._dependencies = ['ticket']

module.exports = MongooseTicketRepository;    