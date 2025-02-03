const express = require('express');
const { expressx } = require('ca-webutils');
const authorizerSchemaController = require('../controllers/authorizer.controller');

const createRouter = () => {
    const router = express.Router();
    let { routeHandler } = expressx;
    let controller = authorizerSchemaController();

    router
        .route('/')
        .get(routeHandler(controller.getAllAuthorizers))
        .post(routeHandler(controller.addAuthorizer));

    router
        .route('/:id')
        .get(routeHandler(controller.getAuthorizerById))
        .put(routeHandler(controller.updateAuthorizer))
        .delete(routeHandler(controller.deleteAuthorizer));

    return router;
}

module.exports = createRouter;
