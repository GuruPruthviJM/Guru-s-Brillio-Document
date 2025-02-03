const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketId: { type: String, required: true },  
  customerId: { type: String, required: true }, 
  employeeId: { type: String }, 
  ticketType: { type: String, required: true }, 
  ticketDescription: { type: String }, 
  ticketRaiseDate: { type: Date, required: true, default: Date.now}, 
  ticketStatus: { type: String, required: true, enum: ['PENDING', 'OPEN', 'CLOSED'] },
  ticketPriority: { type: String, required: true, enum: ['HIGH', 'MEDIUM', 'LOW'] },
});

const Ticket = mongoose.model('Ticket', ticketSchema, 'tickets');

module.exports = Ticket;