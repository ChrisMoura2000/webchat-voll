const { getSomeMessages } = require('../models/messages');

const messageService = async () => {
    const lastMessages = await getSomeMessages()
    console.log(lastMessages);
    return lastMessages;
}

module.exports = { messageService }