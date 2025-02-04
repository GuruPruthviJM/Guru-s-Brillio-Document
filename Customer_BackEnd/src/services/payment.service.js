class PaymentService {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    async getAllPayments() {
        return await this.paymentRepository.getAll();
    }

    async getPaymentById(id) {
        return await this.paymentRepository.findOne({ PAY_ID: id });
    }

    async createPayment(payment) {
        return await this.paymentRepository.create(payment);
    }

    async updatePayment(id, paymentData) {
        return await this.paymentRepository.update({ PAY_ID: id }, paymentData);
    }

    async deletePayment(id) {
        return await this.paymentRepository.remove({ PAY_ID: id });
    }

    async getPaymentsByCustomerId(custId) {
        return await this.paymentRepository.paymentHistory({ customerID: custId });
    }
}

PaymentService._dependencies = ['paymentRepository'];

module.exports = PaymentService;
