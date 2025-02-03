const { MongooseRepository } = require("ca-webutils");

class MongooseAuthorizerRepository extends MongooseRepository{
    constructor(model){
        super(model);
    }
} 

MongooseAuthorizerRepository._dependencies = ['authorizer']

module.exports = MongooseAuthorizerRepository;    