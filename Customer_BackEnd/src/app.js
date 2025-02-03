const express = require('express');
const path = require('path');
const fs = require('fs');
const customerRouter = require('./routers/customer.router');
const ticketRouter = require('./routers/ticket.router');
const paymentRouter = require('./routers/payment.router');

async function createApp(){ 

    const app = express();
    app.use(express.json());
    app.use(express.static(path.join(process.cwd(), 'public')))
    app.use('/api/customers', customerRouter());
    app.use('/api/tickets', ticketRouter());
    app.use('/api/payments', paymentRouter());
    return app; 
}

module.exports = createApp;