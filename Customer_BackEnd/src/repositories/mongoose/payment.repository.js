const { MongooseRepository } = require("ca-webutils");

class MongoosePaymentRepository extends MongooseRepository{
    constructor(model){
        super(model);
    }
} 

MongoosePaymentRepository._dependencies = ['payment']

module.exports = MongoosePaymentRepository;    