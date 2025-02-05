const express = require('express');
const { expressx } = require('ca-webutils');
const authorizerController = require('../controllers/authorizer.controller');
const customerController = require('../controllers/customer.controller');
const employeeController = require('../controllers/employee.controller');
const adminController = require('../controllers/admin.controller');
const managerController = require('../controllers/manager.controller');

const createRouter = () => {
    const router = express.Router();
    let { routeHandler } = expressx;
    let authorizerControl = authorizerController();
    let customerControl = customerController();
    let managerControl = managerController();
    let employeeControl = employeeController();
    let adminControl = adminController();

    router
        .route('/')
        .get(routeHandler(authorizerControl.getAllAuthorizers))
        .post(routeHandler(authorizerControl.addAuthorizer));

    router
        .route('/:id')
        .get(routeHandler(authorizerControl.getAuthorizerById))
        .put(routeHandler(authorizerControl.updateAuthorizer))
        .delete(routeHandler(authorizerControl.deleteAuthorizer));
    
    router
        .route('/:authId/customers')
        .get(routeHandler(customerControl.getAllCustomer))
    
    router
        .route('/:authId/customers/:id')
        .get(routeHandler(customerControl.getCustomerById))
    
    router
        .route('/:authId/managers')
        .get(routeHandler(managerControl.getAllManagers))
    
    router
        .route('/:authId/managers/:id')
        .get(routeHandler(managerControl.getManagerById))
    
    router
        .route('/:authId/employees')
        .get(routeHandler(employeeControl.getAllEmployees))
    
    router
        .route('/:authId/customers/:id')
        .get(routeHandler(employeeControl.getEmployeeById))
    
    //admin routes
    router
        .route('/:authId/admin')
        .get(routeHandler(adminControl.getAllAdmins))
    
    router
        .route('/:authId/admin/:id')
        .get(routeHandler(adminControl.getAdminById))

    return router;
}

module.exports = createRouter;
