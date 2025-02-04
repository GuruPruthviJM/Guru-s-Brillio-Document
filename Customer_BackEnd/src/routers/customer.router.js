const express = require('express');
const {expressx} = require('ca-webutils');
const customerController = require('../controllers/customer.controller');
const paymentController = require('../controllers/payment.controller');
const ticketController = require('../controllers/tickets.controller');

const createRouter = () => {
    const router = express.Router();
    let {routeHandler} = expressx;
    let customerControl = customerController() 
    let paymentControl = paymentController()
    let ticketControl = ticketController()
 
    router
     .route('/')
     .get(routeHandler(customerControl.getAllCustomer))
     .post(routeHandler(customerControl.addCustomer));

    router
     .route('/:id')
     .get(routeHandler(customerControl.getCustomerById))
     .put(routeHandler(customerControl.updateCustomer))
     .delete(routeHandler(customerControl.deleteCustomer));
    
     router
     .route('/:id/payments')
     .get(routeHandler(paymentControl.getPaymentsByCustomerId))
    
    router
        .route('/:id/tickets')
        .get(routeHandler(ticketControl.getTicketByCustId))

    return router;
}

module.exports = createRouter;