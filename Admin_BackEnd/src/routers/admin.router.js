const express = require('express');
const { expressx } = require('ca-webutils');
const adminController = require('../controllers/admin.controller');
const employeeController = require('../controllers/employee.controller');
const managerController = require('../controllers/manager.controller');


const createRouter = () => {
    const router = express.Router();
    let { routeHandler } = expressx;
    let controller = adminController();
    let employeeControl= employeeController();
    let managerControl = managerController();

    router
        .route('/')
        .get(routeHandler(controller.getAllAdmins))
        .post(routeHandler(controller.addAdmin));

    router
        .route('/:id')
        .get(routeHandler(controller.getAdminById))
        .put(routeHandler(controller.updateAdmin))
        .delete(routeHandler(controller.deleteAdmin));
    
    router
        .route('/:id/employee')
        .get(routeHandler(employeeControl.getAllEmployees))
        .post(routeHandler(employeeControl.addEmployee))
    
    router
        .route('/:adminId/employee/:id')
        .put(routeHandler(employeeControl.updateEmployee))
        .delete(routeHandler(employeeControl.deleteEmployee));
    
    router
        .route('/:id/manager')
        .get(routeHandler(managerControl.getAllManagers))
        .post(routeHandler(managerControl.addManager));

    router
        .route('/:adminId/manager/:id')
        .put(routeHandler(managerControl.updateManager))
        .delete(routeHandler(managerControl.deleteManager));

    return router;
}

module.exports = createRouter;