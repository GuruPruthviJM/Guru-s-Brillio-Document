class AdminService {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }

    async getAllAdmins() {
        return await this.adminRepository.getAll();
    }

    async getAdminById(id) {
        return await this.adminRepository.findOne({ Admin_ID: id });
    }

    async createAdmin(admin) {
        return await this.adminRepository.create(admin);
    }

    async updateAdmin(id, adminData) {
        return await this.adminRepository.update({ Admin_ID: id }, adminData);
    }

    async deleteAdmin(id) {
        return await this.adminRepository.remove({ Admin_ID: id });
    }
}

AdminService._dependencies = ['adminRepository'];

module.exports = AdminService;
