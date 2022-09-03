const express = require("express");
const path = require("path");

// Utils & models
const dbConnect = require("./utils/database");

// Routes
const loginRoutes = require("./routes/login");
const chatRoutes = require("./routes/chat");
const { Socket } = require("socket.io");

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
    const server = app.listen(3001);
    const io = require("socket.io")(server);
    io.on("Connection", (socket) => {
      console.log("Connected to a socket.");
    });
  })
  .catch((err) => console.log(err));
