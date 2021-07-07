const express = require('express');

const AccountRouter = require('./router/accountsRouter');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountRouter);

server.get('/', (req, res) => {
    res.send('<h3>Web DataBase Accounts</h3>');
});

module.exports = server;