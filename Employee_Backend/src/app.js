const express = require('express');
const path = require('path');
const fs = require('fs');
const employeeRouter = require('./routers/employee.router')
 
async function createApp(){
    const app = express();
    app.use(express.json());
    app.use(express.static(path.join(process.cwd(), 'public')))
    app.use('/api/employees', employeeRouter())
    return app; 
}

module.exports = createApp; 