require("dotenv").config();
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");
const { webChat } = require('./src/socket/webChat')


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());


const server = app.listen(PORT, () =>
console.log(`conectado na porta ${PORT}`)
);

const io = socketIO(server, {
    cors: {
        origin: '*',
        method: ['GET', 'POST'],
    }
});

webChat(io)