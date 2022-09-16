const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

// Utils & models
const dbConnect = require("./utils/database");

// Routes
const loginRoutes = require("./routes/login");
const chatRoutes = require("./routes/chat");

const app = express();

app.use(
  express.json({
    type: ["application/json"],
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use(loginRoutes);
app.use(chatRoutes);

console.log("Started.");
dbConnect()
  .then((result) => {
    console.log("Connected.");
    const server = http.createServer(app);
    const io = new Server(server);
    io.on("connection", (socket) => {
      console.log("a user connected");
    });
    server.listen(3001, () => {
      console.log("listening on *:3001");
    });
  })
  .catch((err) => console.log(err));
