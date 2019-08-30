const express = require('express');

const Succulents = require('../succulents/succulentsModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/succulents', (req, res) => {
  Succulents.getAll()
    .then(succulents => {
      res.status(200).json(rows);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
