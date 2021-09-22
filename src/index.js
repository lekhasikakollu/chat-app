// Goal: Create an Express web server

// 1. Initialize npm and install Express
// 2. Setup a new Express server
//    i. Serve up the public directory
//    ii.Listen on port 3000
// 3. Create index.html and render the Chat App to the screen
// 4. Test your work - Start the server and view the page in the browser

const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app); // Need this for socket io
const io = socketio(server); //expects a HTTP server hence created one as above.

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

io.on('connection',() => {
console.log('New websocket onnection established.')
});

server.listen(port, ()=>{
    console.log(`Server is starting up on port ${port}`);
})
