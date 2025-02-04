const mongoose = require('mongoose');
const customer = require('./customer.model');

const paymentSchema = new mongoose.Schema({
  PAY_ID: { type: String, unique: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  customerID: { type: Number, ref: customer, required: true }
}, { timestamps: true});

paymentSchema.pre('save', function(next) {
  if (!this.PAY_ID) {
    const date = new Date();
    const dateString = date.toISOString().split('T')[0];
    this.PAY_ID = `PAY-${this.customerID.toString().slice(-5)}-${dateString}`;
  }
  next();
});

const Payment = mongoose.model("payment", paymentSchema, "payment");
module.exports = Payment;
