const allowedOrigins = require("./config/allowedOrigins.js");
const express = require("express");
const todoRoutes = require("./todoRoutes");
const notesRoutes = require("./notesRoutes");
const cors = require("cors")
const corsOptions = require('./config/corsOptions')
const server = express();
const port = 4100;

server.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
); // Use the cors middleware with your specified options.

server.use("/api/todos", todoRoutes.router);
server.use("/api/notes/", notesRoutes.notesRouter);

server.get("/", (req, res) => {
  res.send("Welcome to Utility API");
});

server.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
