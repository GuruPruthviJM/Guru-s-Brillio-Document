const express = require('express');
const { expressx } = require('ca-webutils');
const employeeController = require('../controllers/employee.controller');
const ticketController = require('../controllers/tickets.controller');
const createRouter = () => {
    const router = express.Router();
    let { routeHandler } = expressx;
    let employeeControll = employeeController();
    let ticketControll = ticketController();

    router
        .route('/')
        .get(routeHandler(employeeControll.getAllEmployees))
        .post(routeHandler(employeeControll.addEmployee));

    router
        .route('/:id')
        .get(routeHandler(employeeControll.getEmployeeById))
        .put(routeHandler(employeeControll.updateEmployee))
        .delete(routeHandler(employeeControll.deleteEmployee));

    router
        .route('/:id/tickets')
        .get(routeHandler(ticketControll.getTicketByEmpId))
    
    router
        .route('/:empId/tickets/:id')
        .get(routeHandler(ticketControll.getEmployeeSpecificTicketId))
        .put(routeHandler(ticketControll.updateTicket))

    // Pending We need to print the manager and their collegues

    return router;
}

module.exports = createRouter;
