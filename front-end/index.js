var app = new Vue({
  el: "#app",
  data: {
    onlineUsers: [],
    messages: [],
  },
});

const URL_API = "http://localhost:3000";

const socket = io(URL_API);

function loadOldMessages() {
  fetch(URL_API)
    .then((promise) => promise.json())
    .then((result) => {
      console.log(result);
      app.messages = result.messages;
    });
}

loadOldMessages();

socket.on("updateOnlineUsers", (users) => {
  const currentUser = users.find((user) => socket.id === user.id);
  const otherUsers = users.filter((user) => socket.id !== user.id);
  otherUsers.unshift(currentUser);
  app.onlineUsers = otherUsers;
});

const btnSave = document.querySelector("#btn-save");
const inputNick = document.querySelector("#nickname");

function saveNewNick() {
  const newNick = inputNick.value;
  socket.emit('updateNick', { newNick, id: socket.id})
  inputNick.value = ''
}

btnSave.addEventListener("click", saveNewNick);
