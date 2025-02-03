const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  PAY_ID: { type: String, unique: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  customerID: { type: String, required: true },
}, { timestamps: true });

paymentSchema.pre('save', function(next) {
  if (!this.PAY_ID) {
    // Generate PAY_ID from customer ID and current date (without time)
    const date = new Date();
    const dateString = date.toISOString().split('T')[0]; // Extract only the date part (YYYY-MM-DD)

    this.PAY_ID = `PAY-${this.customerID.toString().slice(-5)}-${dateString}`;
  }
  next();
});

// Export the schema as a model
const Payment = mongoose.model("payment", paymentSchema, "payment");

module.exports = Payment;
