const { injector } = require('ca-webutils');

const authorizerController = () => {
    const authorizerService = injector.getService('authorizerService');

    const getAllAuthorizers = async () => {
        return await authorizerService.getAllAuthorizers();
    };

    const getAuthorizerById = async ({ id }) => {
        return await authorizerService.getAuthorizerById(id);
    };

    const addAuthorizer = async ({ body }) => {
        return await authorizerService.createAuthorizer(body);
    };

    const updateAuthorizer = async ({ body, id }) => {
        return await authorizerService.updateAuthorizer(id, body);
    };

    const deleteAuthorizer = async ({ id }) => {
        return await authorizerService.deleteAuthorizer(id);
    };

    return {
        getAllAuthorizers,
        getAuthorizerById,
        addAuthorizer,
        updateAuthorizer,
        deleteAuthorizer,
    };
};

module.exports = authorizerController;
