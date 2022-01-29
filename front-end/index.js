var app = new Vue({
    el: '#app',
    data: {
        onlineUsers: [],
        messages: [{
            msg: 'Hey there',
            time: '11:53 PM'
        }]
    }
})

const socket = io('http://localhost:3000')

