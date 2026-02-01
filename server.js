// server.js
const { createServer } = require("http");
const next = require("next");
const { Server } = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer((req, res) => handle(req, res));
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    // Citizen triggers SOS
    socket.on("send-sos", (data) => {
      console.log("🚨 Emergency Alert:", data);
      io.emit("receive-sos", data); // Sends to Admin/Driver
    });
  });

  httpServer.listen(3000, () => {
    console.log("> SirenX Running on http://localhost:3000");
  });
});