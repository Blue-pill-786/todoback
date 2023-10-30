const express = require("express");
const todoRoutes = require("./todoRoutes");

const server = express();
const port = 4100;

server.use("/api/todos/", todoRoutes.router);

server.get("/", (req, res) => {
  res.send("Welcome to Utility API");
});

// Error handling middleware
server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong" });
});

server.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
