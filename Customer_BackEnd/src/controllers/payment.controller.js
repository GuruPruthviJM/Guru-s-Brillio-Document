const { injector } = require('ca-webutils');

const paymentController = () => {
    const paymentService = injector.getService('paymentService');

    const getAllPayments = async () => {
        return await paymentService.getAllPayments();
    }

    const getPaymentById = async ({ id }) => {
        return await paymentService.getPaymentById(id);
    }

    const addPayment = async ({ body }) => {
        return await paymentService.createPayment(body);
    }

    const updatePayment = async ({ body, id }) => {
        return await paymentService.updatePayment(id, body);
    }

    const deletePayment = async ({ id }) => {
        return await paymentService.deletePayment(id);
    }

    return {
        getAllPayments,
        getPaymentById,
        addPayment,
        updatePayment,
        deletePayment,
    }
}

module.exports = paymentController;
