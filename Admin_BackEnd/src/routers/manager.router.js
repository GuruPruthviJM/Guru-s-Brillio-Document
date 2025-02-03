const express = require('express');
const { expressx } = require('ca-webutils');
const managerController = require('../controllers/manager.controller');

const createRouter = () => {
    const router = express.Router();
    let { routeHandler } = expressx;
    let controller = managerController();

    router
        .route('/')
        .get(routeHandler(controller.getAllManagers))
        .post(routeHandler(controller.addManager));

    router
        .route('/:id')
        .get(routeHandler(controller.getManagerById))
        .put(routeHandler(controller.updateManager))
        .delete(routeHandler(controller.deleteManager));

    return router;
};

module.exports = createRouter;
