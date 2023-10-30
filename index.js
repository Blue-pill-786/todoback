const express = require("express");
const todoRoutes = require("./todoRoutes");
const notesRoutes = require("./notesRoutes");

const server = express();
const port = 4100;

server.use("/api/todos", todoRoutes.router);
server.use("/api/notes/", notesRoutes.notesRouter);

server.get("/", (req, res) => {
  res.send("Welcome to Utility API");
});

server.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
