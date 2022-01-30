let onlineUsers = [];
const webChat = (io) => {
    io.on('connection', (socket) => {
        console.log('New Connection!', socket.id);
        const newUser = {
            id: socket.id,
            name: socket.id,
        }
        
        onlineUsers.push(newUser)
        
        io.emit('updateOnlineUsers', onlineUsers)

        socket.on('updateNick', ({newNick, id}) => {
            const response = onlineUsers.filter((user) => socket.id !== user.id)
            onlineUsers = response
            onlineUsers.unshift({ id, name: newNick })
            io.emit('updateOnlineUsers', onlineUsers)
        })
    })
}

module.exports = { webChat }