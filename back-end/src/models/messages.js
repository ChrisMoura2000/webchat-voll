const connection = require("./connection");

const saveMessage = async (message, nickname, timestamp) => {
  const messagesCollection = await connection().then((db) =>
    db.collection("messages")
  );

  const responseDB = await messagesCollection.insertOne({
    message,
    nickname,
    timestamp,
  });
  console.log(responseDB);
};

const getSomeMessages = async (quantity) => {
  const messagesCollection = await connection().then((db) =>
    db.collection("messages")
  );

  const response = await messagesCollection.find().limit(quantity).toArray();
  console.log(response);
  return response;
};

module.exports = {
  saveMessage,
  getSomeMessages,
};
