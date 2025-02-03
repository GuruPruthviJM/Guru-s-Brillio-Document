const express = require('express');
const path = require('path');
const fs = require('fs');
const employeeRouter = require('./routers/employee.router')
const ticketRouter = require('./routers/ticket.router');
const managerRouter = require('./routers/manager.router');
const adminRouter = require('./routers/admin.router');
const authorizerRouter = require('./routers/authorizer.router');
 
async function createApp(){
    const app = express();
    app.use(express.json());
    app.use(express.static(path.join(process.cwd(), 'public')))
    app.use('/api/employees', employeeRouter())
    app.use('/api/tickets', ticketRouter())
    app.use('/api/managers', managerRouter())
    app.use('/api/admins', adminRouter())
    app.use('/api/authorizers', authorizerRouter())
    return app; 
}

module.exports = createApp; 