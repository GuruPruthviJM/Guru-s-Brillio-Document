class AuthorizerSchemaService {
    constructor(authorizerRepository) {
        this.authorizerRepository = authorizerRepository;
    }

    async getAllAuthorizers() {
        return await this.authorizerRepository.getAll();
    }

    async getAuthorizerById(id) {
        return await this.authorizerRepository.findOne({ Authorizer_ID: id });
    }

    async createAuthorizer(authorizer) {
        return await this.authorizerRepository.create(authorizer);
    }

    async updateAuthorizer(id, authorizerData) {
        return await this.authorizerRepository.update({ Authorizer_ID: id }, authorizerData);
    }

    async deleteAuthorizer(id) {
        return await this.authorizerRepository.remove({ Authorizer_ID: id });
    }
}

AuthorizerSchemaService._dependencies = ['authorizeRepository'];

module.exports = AuthorizerSchemaService;
