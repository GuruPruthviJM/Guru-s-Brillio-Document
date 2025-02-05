const { MongooseRepository } = require("ca-webutils");

class MongooseTicketRepository extends MongooseRepository{
    constructor(model){
        super(model);
        this.model=model;
    }

    async getTicketByEmpId(matcher = {}) {
        return this.model.find(matcher)
        .populate({ 
            path: 'employeeId',
            model: 'employee', 
            localField: 'employeeId', 
            foreignField: 'employeeId',
            });
    }

    async getEmployeeSpecificTicketId(matcher = {}) {
        let ticketsBySpecificEmp = await this.getTicketByEmpId({employeeId: matcher.employeeId})
        return ticketsBySpecificEmp.find(ticket=> ticket.ticketId === matcher.ticketId);
    }
} 

MongooseTicketRepository._dependencies = ['ticket']

module.exports = MongooseTicketRepository;    