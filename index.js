const express = require("express");
const todoRoutes = require("./todoRoutes");
const notesRoutes = require("./notesRoutes");

const server = express();
const port = 4100;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });
server.use("/api/todos", todoRoutes.router);
server.use("/api/notes/", notesRoutes.notesRouter);


server.get("/", (req, res) => {
  res.send("Welcome to Utility API");
});

server.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
