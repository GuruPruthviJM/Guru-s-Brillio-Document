const express = require('express');
const { expressx } = require('ca-webutils');
const adminController = require('../controllers/admin.controller');

const createRouter = () => {
    const router = express.Router();
    let { routeHandler } = expressx;
    let controller = adminController();

    router
        .route('/')
        .get(routeHandler(controller.getAllAdmins))
        .post(routeHandler(controller.addAdmin));

    router
        .route('/:id')
        .get(routeHandler(controller.getAdminById))
        .put(routeHandler(controller.updateAdmin))
        .delete(routeHandler(controller.deleteAdmin));

    return router;
}

module.exports = createRouter;