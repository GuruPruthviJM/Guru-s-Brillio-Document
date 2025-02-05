class TicketService {
    constructor(ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    async getAllTickets() {
        return await this.ticketRepository.getAll();
    }

    async getTicketById(id) {
        return await this.ticketRepository.findOne({ ticketId: id });
    }

    async createTicket(ticket) {
        return await this.ticketRepository.create(ticket);
    }

    async updateTicket(id, ticketData) {
        return await this.ticketRepository.update({ ticketId: id }, ticketData);
    }

    async deleteTicket(id) {
        return await this.ticketRepository.remove({ ticketId: id });
    }

    async getTicketByEmpId(id){
        return await this.ticketRepository.getTicketByEmpId({employeeId: id});
    }

    async getEmployeeSpecificTicketId(empId, id){
        return await this.ticketRepository.getEmployeeSpecificTicketId({employeeId: empId, ticketId: id});
    }
}

TicketService._dependencies = ['ticketRepository'];

module.exports = TicketService;