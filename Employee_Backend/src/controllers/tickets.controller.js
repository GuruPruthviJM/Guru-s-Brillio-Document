const { injector } = require('ca-webutils');

const ticketController = () => {
    const ticketService = injector.getService('ticketService');

    const getAllTickets = async () => {
        console.log("Hi"); // Changed on 5/2/2025
        return await ticketService.getAllTickets();
    };

    const getTicketById = async ({ id }) => {
        return await ticketService.getTicketById(id);
    };

    const addTicket = async ({ body }) => {
        return await ticketService.createTicket(body);
    };

    const updateTicket = async ({ body, id }) => {
        return await ticketService.updateTicket(id, body);
    };

    const deleteTicket = async ({ id }) => {
        return await ticketService.deleteTicket(id);
    };

    const getTicketByEmpId = async ({ id }) => {
        return await ticketService.getTicketByEmpId(id);
    };

    const getEmployeeSpecificTicketId = async ({empId, id }) => {
        return await ticketService.getEmployeeSpecificTicketId(empId, id)
    }

    return {
        getAllTickets,
        getTicketById,
        addTicket,
        updateTicket,
        deleteTicket,
        getTicketByEmpId,
        getEmployeeSpecificTicketId
    };
};

module.exports = ticketController;
