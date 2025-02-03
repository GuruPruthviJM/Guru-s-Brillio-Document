const express = require('express');
const {expressx} = require('ca-webutils');
const customerController = require('../controllers/customer.controller');

const createRouter = () => {
    const router = express.Router();
    let {routeHandler} = expressx;
    let controller = customerController() 
 
    router
     .route('/')
     .get(routeHandler(controller.getAllCustomer))
     .post(routeHandler(controller.addCustomer));

    router
     .route('/:id')
     .get(routeHandler(controller.getCustomerById))
     .put(routeHandler(controller.updateCustomer))
     .delete(routeHandler(controller.deleteCustomer));

    return router;
}

module.exports = createRouter;