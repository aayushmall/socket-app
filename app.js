var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./connection");

const Message = require("./models/message");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});

const io = require("socket.io")(listener);

io.on("connection", async () => {
  console.log("Client connected");
  console.log("Client connected");

  const messages = await Message.findAll();

  io.emit("messages", messages);
});
