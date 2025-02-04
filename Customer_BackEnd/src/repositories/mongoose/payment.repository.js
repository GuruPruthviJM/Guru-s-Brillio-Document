const { MongooseRepository } = require("ca-webutils");

class MongoosePaymentRepository extends MongooseRepository{
    constructor(model){
        super(model);
        this.model = model;
    }

    async paymentHistory(matcher = {}) {
        return await this.model.find(matcher).populate('customerID')
    }
}

MongoosePaymentRepository._dependencies = ['payment']

module.exports = MongoosePaymentRepository;    