const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

const users = [
    {
        id: 1,
        name: "alex"
    },
    {
        id: 2,
        name: "john"
    },
    {
        id: 3,
        name: "dan"
    }
]

server.get('/', (req, res) => {
    res.json({ MESSAGE: process.env.MESSAGE, INSTRUCTIONS: process.env.INSTRUCTIONS });
});

server.get('/api/users', (req, res) => {
    res.json(users);
});

server.post('/api/register', (req, res) => {
    res.json('post');
});

server.post('/api/login', (req, res) => {
    res.json('postTwo');
});

module.exports = server;