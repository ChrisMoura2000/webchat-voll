require('dotenv').config();
const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const model = require('./src/models/messages');

const app = express();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));