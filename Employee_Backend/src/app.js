const express = require('express');
const path = require('path');
const fs = require('fs');
const employeeRouter = require('./routers/employee.router')
const ticketRouter = require('./routers/ticket.router')
async function createApp(){
    const app = express();
    app.use(express.json());
    app.use(express.static(path.join(process.cwd(), 'public')))
    app.use('/api/employees', employeeRouter())
    app.use('/api/tickets', ticketRouter())
    return app; 
}

module.exports = createApp; 