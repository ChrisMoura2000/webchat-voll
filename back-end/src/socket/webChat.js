let onlineUsers = [];
const webChat = (io) => {
    io.on('connection', (socket) => {
        console.log('New Connection!');
        const newUser = {
            id: socket.id,
            name: '',
        }
        
        onlineUsers.push(newUser)
        
        io.emit('updateOnlineUsers', onlineUsers)
    })
}

module.exports = { webChat }